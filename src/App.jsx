import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Step1 from './components/pages/Step1/Step1'
import Step2 from './components/pages/Step2/Step2'
import Step3 from './components/pages/Step3/Step3'
import StepFour from './components/pages/Stepfour/StepFour'
import Step5 from './components/pages/Step5/Step5'
import { FormProvider } from './FormContext'
import Template from './components/Template/Template'

function App() {
  return (
    <FormProvider>
      <Router>
        <MainContent />
      </Router>
    </FormProvider>
  )
}

function MainContent() {
  const location = useLocation()
  
  return (
    <>
      {location.pathname !== '/privacy-policy' && <Navbar />}
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path='/step1' element={<Step1 />} />
        <Route path='/step2' element={<Step2 />} />
        <Route path='/step3' element={<Step3 />} />
        <Route path='/step4' element={<StepFour />} />
        <Route path='/step5' element={<Step5 />} />
        <Route path='/privacy-policy' element={<Template />} />
      </Routes>
    </>
  )
}

export default App

/*import React, { useContext } from 'react';
import './Template.css'
import FormContext from '../../FormContext'

function Template() {
  const { formData } = useContext(FormContext);

  return (
    <div className='maincontainer'>
      <div className='paperh'>
        <div className='header'>
          <h3>Privacy Policy for {formData.appName} </h3>
        </div>

        <div className='paper'>

          <div className='title'>
            <div className='subh'>
              <h1>Privacy Policy</h1>
            </div>
          </div>
          <div className='content'>
            <div className='cphara'>
              <p>Last updated: {formData.generatedDate}</p>
                  </div>
            <div className='cphara'>
              
              
              
              
              
            </div>
            <div className='cphara'>
              
              <div className='list'>
                <ul>
                  <li>{formData.email}</li>
                  <li>{formData.name}</li>
                  <li>{formData.phone}</li>
                  <li>{formData.useraddress}</li>
                  <li>Usage Data</li>
                </ul>
              </div>
            </div>
            
            <div className='ctitle'>
              <h4>Use of Your Personal Data</h4>
            </div>
            <p>The Company may use Personal Data for the following purposes:</p>
            <div className='list'>
              <ul>
                <li><strong>To provide and maintain our Service,</strong> including to monitor the usage of our Service.</li>
                <li><strong>To manage Your Account:</strong>  to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                <li><strong>For the performance of a contract:</strong>  the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                <li><strong>To contact You:</strong>  To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                <li><strong>To provide You</strong>  with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                <li><strong>To manage Your requests:</strong>  To attend and manage Your requests to Us.</li>
                <li><strong>For business transfers:</strong>  We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets,
                  whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                <li><strong>For other purposes:</strong>  We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
              </ul>
            </div>
            <p>We may share Your personal information in the following situations:</p>
            <div className='list'>
              <ul>
                <li><strong> With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><strong>For business transfers:</strong>   We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                <li><strong>With Affiliates:</strong>   We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                <li><strong>With business partners:</strong>  We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                <li><strong>With other users:</strong>   when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                <li><strong>With Your consent:</strong>   We may disclose Your personal information for any other purpose with Your consent.</li>
              </ul>
            </div>
          </div>
          <div className='cphara'>
            <div className='ctitle'>
              <h4>Retention of Your Personal Data</h4>
            </div>
            <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes,
              and enforce our legal agreements and policies.</p>
            <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the
              functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
          </div>
          <div className='cphara'>
            <div className='ctitle'>
              <h4>Transfer of Your Personal Data</h4>
            </div>
            <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental
              jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
            <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
            <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will
              take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
          </div>
          <div className='cphara'>
            <div className='ctitle'>
              <h4>Delete Your Personal Data</h4>
            </div>
            <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
            <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
            <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that
              allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
            <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
          </div>
          <div className='cphara'>
            <div className='ctitle'>
              <h4>Disclosure of Your Personal Data</h4>
            </div>
            <div className='ctitle'>
              <h5>Business Transactions</h5>
            </div>
            <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and
              becomes subject to a different Privacy Policy.</p>
            <div className='ctitle'>
              <h5>Law enforcement</h5>
            </div>
            <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
            <div className='ctitle'>
              <h5>Other legal requirements</h5>
            </div>
            <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
            <div className='list'>
              <ul>
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </ul>
            </div>
          </div>
          <div className='cphara'>
            <div className='ctitle'>
              <h2>Children's Privacy</h2>
            </div>
            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
              If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have
              collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
            <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
          </div>
          <div className='cphara'>
            <div className='ctitle'>
              <h2>Links to Other Websites</h2>
            </div>
            <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
            <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
          </div>
          <div className='cphara'>
            <div className='ctitle'>
              <h2>Changes to this Privacy Policy</h2>
            </div>
            <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
            <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </div>
          
            <div className='ctitle'>
              <h2>Contact Us</h2>
            </div>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <div className='list'>
              <ul>
                {formData.byemail && <li>By email: {formData.emailby}</li>}
                {formData.byphone && <li>By phone number: {formData.phoneNumber}</li>}
                {formData.web && <li>By visiting a page on our website: {formData.website}</li>}
                {formData.post && <li>By sending post mail: {formData.postAddress}</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>Generated using  Privacy Policy Generator</p>
      </div>
    </div>

  )
}

export default Template
/**/