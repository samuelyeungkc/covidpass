import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import Page from '../components/Page'
import Card from '../components/Card'

function Faq(): JSX.Element {
    const { t } = useTranslation(['common', 'index', 'faq']);
    const questionList = [
      {description: 'Which version of iOS does this support?', answer: 'iOS 13.7 is the minimum at the moment. We are looking for adjustments for older iOSes, but it will take a bit of time.'},
      {description: "What are the supported browsers?", answer: 'For iPhones, only Safari is supported for importing to your Apple Wallet. For any other devices, we recommend that you save it as photo using your browser of choice. Broswers built internally into mobile apps (e.g. Facebook, Twitter, Instagram) are known to have issues.'},
      {description: 'Why have we taken time to build this?', answer: 'Gives Ontarians/organizations something easy to use (volunteered-developed, unofficial) until the official provincial app comes out in October.'},
      {description: 'Who made this?', answer: 'The same group of volunteers (Billy Lo, Ryan Slobojan, Evert Timberg, Jason Liu, Anujan Mathisekaran, Lisa Discepola, Samantha Finn, Madison Pearce) who created the all-in-one vaccine appointment finding tool at vaccine-ontario.ca.'},
      {description: 'Should I use the official provincial apps when they come out on 22nd October?', answer: 'YES. Once the official QR code from the province is available, you will also be able to refresh what\'s in your Apple Wallet as well. More details will follow.'},
      {description: 'How is the data on my vaccination receipt processed?', answer: 'It checks the receipt for an official signature from the province. If present, the receipt data is converted into Apple\'s format and then added into your iOS Wallet app.'},
      {description: 'How can organizations validate this QR code?', answer: 'Just aim your standard camera app (iPhone/Android) at the code, and it will bring up a web page that shows the verification result.'},
      {description: 'Is this free and private?', answer: 'Similar to VaxHuntersCanada, there are no commerical interests. Just volunteers trying to do our part to help the community.'},
      {description: 'Do you have plans for Android support?', answer: 'Yes. We are working with Google to gain access to the APIs required. Meanwhile, you can also use this tool to download an Apple Wallet pass and import that into Google Pay Wallet using apps such as Pass2Pay.'},
      {description: 'How about BC, Quebec and Alberta?', answer: 'We will be investigating BC shortly. If you are interested in contributing, email us at grassroots@vaccine-ontario.ca'},
      {description: 'How can I stay up-to-date on your progress?', answer: 'We will post regular updates on Twitter @grassroots_team.'},
      {description: 'I only have an emailed receipt (e.g. Red/White OHIP card users). Can I still use this tool?', answer: 'Not right now unfortunately. But we expect to be able to support that after the official app is released on 22 Oct.'},
      {description: 'What does the colour of the Apple Wallet pass mean?', answer: 'Dose 1 is shown as Orange; dose 2+ in green for easy differentiation without reading the text.'},
      {description: 'How about Apple Watch?', answer: 'If you have iCloud sync enabled, you will see the pass on the watch too.'},
      {description: 'I have more questions. Can you please help me?', answer: 'Sure. Just email us at grassroots@vaccine-ontario.ca.'}
    ];


    return (
        <Page content={
            <Card step="§" heading={t('common:faq')} content={
                <div className="space-y-3">
                    <p className="font-bold">{t('faq:heading')}</p>
                    <ol>
                        {questionList.map((question, i) => {
                        return (
                            <div>
                                <li key={i}><b>{i+1}. {question.description}</b></li>
                                <li key={i}>{question.answer}</li>
                                <br></br>
                            </div>
                        );
                        })}
                    </ol>

                </div>
            }/>
        }/>
    )
}

export async function getStaticProps({ locale }) {
    return { 
        props: { 
            ...(await serverSideTranslations(locale, ['index', 'faq', 'common']))
        }
    }
}

export default Faq;