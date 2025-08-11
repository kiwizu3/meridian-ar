import PrivacyPolicy from '@/app/[lang]/privacy-policy/page';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';

jest.mock('@/get-dictionary', () => ({
  getDictionary: jest.fn(),
}));

describe('Home Page', () => {
  it('Should render the Privacy page correctly with the given language', async () => {
    // Mock the dictionary to return predictable values
    const mockDictionary = {
      privacy_policy_heading: 'Privacy Policy:',
    };
    (getDictionary as jest.Mock).mockResolvedValue(mockDictionary);

    const params = { lang: 'en' as Locale };

    // Act block to handle the async rendering
    let HomePageComponent;
    await act(async () => {
      HomePageComponent = await PrivacyPolicy({ params });
    });

    render(HomePageComponent as any);

    // Assertions
    expect(screen.getByText(/Privacy Policy:/i)).toBeInTheDocument();
  });
});
