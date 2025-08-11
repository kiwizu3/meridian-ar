'use client';

import { useEffect, useRef, useState } from 'react';
import './SnapMotion.css';

export default function SnapMotionComponent(props: any) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient &&
    typeof window !== 'undefined' &&
    window?.innerWidth > 700 && <SnapMotion {...props} />
  );
}

// get elements by type
const getElementsByType = (type: any) =>
  Array.from(document.querySelectorAll(`[snap-motion-type="${type}"]`));

// get holder element by id
const getObjectHolderById = (id: any) =>
  document.querySelector(
    `[snap-motion-type="object"][snap-motion-id*="${id}"]`,
  );

// get elements with ids and positions
const getElements = (type: any) =>
  getElementsByType(type).map((element) => {
    const id = element.getAttribute('snap-motion-id');
    const position = element.getBoundingClientRect().top;
    const holder = getObjectHolderById(id);
    return { id, position, holder, element };
  });

// methods for easing functions
const pow = (x: any, y: any) => Math.pow(x, y);
const sqrt = (x: any) => Math.sqrt(x);
const sin = (x: any) => Math.sin(x);
const cos = (x: any) => Math.cos(x);
const pi = Math.PI;

// easing functions
const easingFunctions: any = {
  linear: (x: any) => x,
  'in-sine': (x: any) => 1 - cos((x * pi) / 2),
  'out-sine': (x: any) => sin((x * pi) / 2),
  'in-out-sine': (x: any) => -(cos(pi * x) - 1) / 2,
  'in-quad': (x: any) => x * x,
  'out-quad': (x: any) => 1 - (1 - x) * (1 - x),
  'in-out-quad': (x: any) => (x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2),
  'in-cubic': (x: any) => x * x * x,
  'out-cubic': (x: any) => 1 - pow(1 - x, 3),
  'in-out-cubic': (x: any) =>
    x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2,
  'in-quart': (x: any) => x * x * x * x,
  'out-quart': (x: any) => 1 - pow(1 - x, 4),
  'in-out-quart': (x: any) =>
    x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2,
  'in-quint': (x: any) => x * x * x * x * x,
  'out-quint': (x: any) => 1 - pow(1 - x, 5),
  'in-out-quint': (x: any) =>
    x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2,
  'in-expo': (x: any) => (x === 0 ? 0 : pow(2, 10 * x - 10)),
  'out-expo': (x: any) => (x === 1 ? 1 : 1 - pow(2, -10 * x)),
  'in-out-expo': (x: any) =>
    x === 0
      ? 0
      : x === 1
        ? 1
        : x < 0.5
          ? pow(2, 20 * x - 10) / 2
          : (2 - pow(2, -20 * x + 10)) / 2,
  'in-circ': (x: any) => 1 - sqrt(1 - pow(x, 2)),
  'out-circ': (x: any) => sqrt(1 - pow(x - 1, 2)),
  'in-out-circ': (x: any) =>
    x < 0.5
      ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
      : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2,
  'in-back': (x: any) => 2.70158 * x * x * x - 1.70158 * x * x,
  'out-back': (x: any) => 1 + 2.70158 * pow(x - 1, 3) + 1.70158 * pow(x - 1, 2),
  'in-out-back': (x: any) =>
    x < 0.5
      ? (pow(2 * x, 2) * ((2.5949095 + 1) * 2 * x - 2.5949095)) / 2
      : (pow(2 * x - 2, 2) * ((2.5949095 + 1) * (x * 2 - 2) + 2.5949095) + 2) /
        2,
};

/**
 *
 * @param {{
 *  duration: number
 *  easing: 'linear' | 'in-sine'| 'out-sine' | 'in-out-sine' | 'in-quad' | 'out-quad' | 'in-out-quad' | 'in-cubic' | 'out-cubic' | 'in-out-cubic' | 'in-quart' | 'out-quart' | 'in-out-quart' | 'in-quint' | 'out-quint' | 'in-out-quint' | 'in-expo' | 'out-expo' | 'in-out-expo' | 'in-circ' | 'out-circ' | 'in-out-circ' | 'in-back' | 'out-back' | 'in-out-back'
 * }} props
 * @returns
 */
function SnapMotion(props: any) {
  // dom update timer
  const [time, setTime] = useState(0);
  // current animation frame id
  const animateFrame = useRef<any>(null);
  // current animation time stamp
  const animateStamp = useRef(performance.now());
  // locked status on animating
  const animateLock = useRef(false);
  // array of scroll anchors
  const scrollAnchors = useRef<any>([]);
  // current scroll anchor index
  const scrollIndex = useRef(0);
  // next scroll anchor id
  const scrollNext = useRef(null);
  // snap scroll path
  const scrollPath = useRef({ from: null, to: null, direction: 1 });
  // scroll stated distance and time
  const scrollOrigin = useRef({ position: 0, distance: 0, time: 0 });
  // mouse down state to manual scroll
  const mouseDown = useRef(false);
  // touch down origin position
  const touchDown = useRef(0);
  // object position by holder
  const [holder, setHolder] = useState({ top: -1000, left: -1000 });
  // effect on mount
  useEffect(() => {
    // method to snap between anchors
    const snap = (input: any) => {
      // get anchors and current index
      const anchors = scrollAnchors.current;
      const index = scrollIndex.current;
      // check input type
      if (typeof input === 'number') {
        // increase or decrease index
        scrollIndex.current =
          index + input < 0
            ? 0
            : index + input > anchors.length - 1
              ? anchors.length - 1
              : index + input;
      } else {
        // get index by anchor id
        scrollIndex.current = anchors.findIndex(
          (item: any) => item.id === input,
        );
      }
      // check index change
      if (scrollIndex.current !== index) {
        // set previous index on path
        scrollPath.current.from = anchors[index].id;
        // set current index on path
        scrollPath.current.to = anchors[scrollIndex.current].id;
        // update dom
        setTime(performance.now());
      }
    };
    // method to locate object by holder
    const locate = (index: any, gap = 0) => {
      // update anchors
      scrollAnchors.current = getElements('scroll');
      // get anchor by index
      const scrollItem = scrollAnchors.current[index];
      // set object holder if given
      if (scrollItem?.holder) {
        const holderBound = scrollItem.holder.getBoundingClientRect();
        setHolder({
          top: holderBound.top - gap,
          left: holderBound.left,
        });
      }
    };
    // animation frame loop
    const animate = (currentStamp: any) => {
      // get container element
      const container = document.documentElement;
      // request next frame
      animateFrame.current = requestAnimationFrame(animate);
      // update animate stamp
      animateStamp.current = currentStamp;
      // return if mouse down for manual scroll
      if (mouseDown.current) {
        return;
      }
      // get possible scroll height
      const scrollHeight = container.scrollHeight - window.innerHeight;
      const scrollLimit = container.scrollTop === scrollHeight;
      // get scroll anchors
      scrollAnchors.current = getElements('scroll');
      // current anchor item
      const scrollItem = scrollAnchors.current[scrollIndex.current];
      // get full distance to scroll
      const scrollDistance =
        // check with possible max scroll height
        container.scrollTop + scrollItem?.position > scrollHeight
          ? scrollHeight - container?.scrollTop
          : scrollItem?.position;
      // get scroll direction
      const scrollDirection = scrollDistance > 0 ? 1 : -1;
      // overflow flags
      const overflowScroll =
        (scrollDirection === 1 && scrollLimit) ||
        (scrollDirection === -1 && container.scrollTop < 1);

      const overflowDelta = Math.abs(scrollDistance) < 1;
      // check scroll distance
      if (overflowScroll || overflowDelta) {
        if (animateLock.current) {
          // release lock on animate completion
          animateLock.current = false;
          // update object dom
          setTime(performance.now());
        }
      } else {
        // check animation start frame
        if (animateLock.current === false) {
          // store scroll origin data on start
          scrollOrigin.current = {
            position: container.scrollTop,
            distance: scrollDistance,
            time: currentStamp,
          };
          // set object by holder
          locate(scrollIndex.current, scrollDistance);
        }
        // lock while animating
        animateLock.current = true;
        // update object dom
        setTime(performance.now());
        // start and end values
        const startValue = scrollOrigin.current.position;
        const endValue = startValue + scrollOrigin.current.distance;
        // get time frames
        const startTime = scrollOrigin.current.time;
        const currentTime = currentStamp;
        const endTime = startTime + props.duration;
        setTime(performance.now());
        // get time and value differences
        const timeDiff = endTime - startTime;
        const valueDiff = endValue - startValue;
        // reduce current time into one to zero range
        const floatTime = (currentTime - startTime) / (endTime - startTime);
        // calculate time according to given easing function
        const animateTime =
          props.easing !== 'linear'
            ? easingFunctions[props.easing](floatTime) *
              (currentTime - startTime)
            : currentTime;
        // get current value by time
        const currentValue = startValue + (valueDiff * animateTime) / timeDiff;
        // check distance to scroll for current frame
        if (
          scrollDirection * currentValue > endValue ||
          currentTime > endTime
        ) {
          // instant scroll for distance smaller than delta
          scrollItem.element.scrollIntoView({
            behavior: 'instant',
            block: 'start',
          });
        } else {
          // animate scroll for distance larger than delta
          container.scrollTo(0, currentValue);
          // console.log("a", { startTime, currentTime, endTime })
        }
        if (scrollPath.current.direction !== scrollDirection) {
          scrollPath.current.direction = scrollDirection;
          setTime(performance.now());
        }
      }
    };
    // start animation
    animateFrame.current = requestAnimationFrame(animate);
    // wheel event listener
    const onWheel = (event: any) => {
      if (document.querySelector('.chat-container')?.contains(event.target)) {
        return;
      }
      // prevent default
      event.preventDefault();
      // return if animating
      if (animateLock.current) {
        return;
      }
      // increase or decrease scroll index
      snap(event.deltaY > 0 ? 1 : -1);
    };
    // add wheel event listener
    window.addEventListener('wheel', onWheel, { passive: false });
    // mouse down event listener
    const onMouseDown = (event: any) => {
      // check animating state
      if (animateLock.current) {
        // prevent default
        if (event.cancelable) {
          event.preventDefault();
        }
      } else {
        // set cursor down
        mouseDown.current = true;
        // reset next scroll id
        scrollNext.current = null;
        // store touch down position
        if (event.type === 'touchstart') {
          touchDown.current = event.changedTouches[0].clientY;
        }
      }
    };
    // add mouse down event listener
    window.addEventListener('mousedown', onMouseDown, { passive: false });
    window.addEventListener('touchstart', onMouseDown, { passive: false });
    window.addEventListener('touchstart', onMouseDown, { passive: false });
    // mouse down up listener
    const onMouseUp = (event: any) => {
      // return if animating
      if (animateLock.current) {
        return;
      }
      // set cursor up
      mouseDown.current = false;
      // snap if next id given
      if (event.type === 'mouseup' && scrollNext.current) {
        // snap to next anchor
        snap(scrollNext.current);
      } else if (event.type === 'touchend') {
        // get drag distance
        const drag = touchDown.current - event.changedTouches[0].clientY;
        // snap anchor by dragged direction
        if (drag !== 0) {
          snap(drag > 0 ? 1 : -1);
        }
      }
    };
    // add mouse up event listener
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onMouseUp);
    // scroll event listener
    const onScroll = (event: any) => {
      if (document.querySelector('.chat-container')?.contains(event.target)) {
        return;
      }
      // return if animating
      if (animateLock.current) {
        return;
      }
      // update anchors array
      scrollAnchors.current = getElements('scroll');
      // get positions array
      const positions = scrollAnchors.current.map((item: any) =>
        Math.abs(item.position),
      );
      // get closest anchor
      const minIndex = positions.findIndex(
        (item: any) => item === Math.min(...positions),
      );
      // set next anchor id if valid
      if (minIndex !== -1) {
        scrollNext.current = scrollAnchors.current[minIndex].id;
      }
      // set object by holder
      locate(scrollIndex.current);
    };
    // add scroll event listener
    window.addEventListener('scroll', onScroll);
    // key down listener
    const onKeyDown = (event: any) => {
      // check page up down keys
      if (event.key === 'PageDown' || event.key === 'PageUp') {
        // prevent default
        event.preventDefault();
        // return if animating
        if (animateLock.current) {
          return;
        }
        // snap by direction
        snap(event.key === 'PageDown' ? 1 : -1);
      }
    };
    // add key down listener
    window.addEventListener('keydown', onKeyDown);
    // resize listener
    const onResize = () => {
      // return if animating
      if (animateLock.current) {
        return;
      }
      // set object by holder
      locate(scrollIndex.current);
    };
    // add resize event listener
    window.addEventListener('resize', onResize);
    // initial object by holder
    locate(scrollIndex.current);
    // close on dismount
    return () => {
      // cancel animation frame
      cancelAnimationFrame(animateFrame.current);
      // remove event listeners
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchstart', onMouseDown);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);
  // animation dom
  return (
    <div
      className="snap-motion filter-home"
      snap-animate={animateLock.current.toString()}
      snap-time={time}
      snap-from={scrollPath.current.from}
      snap-to={scrollPath.current.to}
      snap-direction={scrollPath.current.direction === 1 ? 'down' : 'up'}
      style={{
        top: holder.top,
        left: holder.left,
        animationDuration: `${props.duration / 1000}s`,
        transitionDuration: `${props.duration / 1000}s`,
        transitionProperty: animateLock.current
          ? 'top, left, opacity, transform'
          : 'opacity, transform',
      }}
    >
      <div className="snap-motion-inner">
        <div className="snap-motion-item smi-left" />
        <div className="snap-motion-item smi-right" />
        <div className="snap-motion-item smi-bottom" />
      </div>
      {/* <div className="snap-motion-item smi-play" /> */}
    </div>
  );
}
