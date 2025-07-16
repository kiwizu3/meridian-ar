'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function ClimateActionPart1() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        7. CLIMATE CHANGE MITIGATION: BEYOND BUSINESS OPERATIONS
      </h2>

      <Card>
        <CardBody>
          <p>
            In an effort to raise awareness about climate change and its impact
            on local communities, we conducted a comprehensive climate
            mitigation programme for schools in areas most affected by climate
            change. This initiative, carried out under the guidance and
            supervision of the Western Provincial Council, aimed to educate
            students about the pressing issue of climate change and empower them
            with knowledge on how to mitigate and adapt to its effects.
          </p>

          <div className="mt-6">
            <h4 className="font-medium">Programme Details</h4>
            <p>
              The programme focused on two schools in the Kalutara District, one
              of the most climate-vulnerable regions in the Western Province.
              Yatagampitya Kanishta Vidyala and Vivekananda Primary School, with
              a combined total of 150 students, were the primary participants.
            </p>

            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium">Topics Covered:</h5>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Climate change awareness</li>
                  <li>Survival strategies in extreme weather events</li>
                  <li>Practical actions during floods and landslides</li>
                </ul>
              </div>
              <div>
                <Image
                  src="/placeholder-school-program.jpg"
                  alt="School Climate Programme"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Collaboration</h4>
            <p>
              In collaboration with the Red Cross and relevant local officials,
              we delivered two educational sessions, engaging students with
              practical knowledge on how to act during emergencies. These
              sessions were well-received, and the students were encouraged to
              apply what they learned to protect themselves and their
              communities.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Future Plans</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                At Yatagampitya Kanishta Vidyala: Develop sanitation facilities
                crucial during emergencies
              </li>
              <li>
                At Vivekananda Primary School: Install direction boards for
                emergency guidance
              </li>
            </ul>
            <p className="mt-4">
              Through these initiatives, we are not only raising awareness about
              climate change, but also implementing tangible solutions that can
              help mitigate its effects and prepare future generations to face
              the challenges of a changing climate.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
