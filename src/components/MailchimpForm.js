import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {

  const REACT_APP_MAILCHIMP_URL="https://gmail.us21.list-manage.com/subscribe/post";
  const REACT_APP_MAILCHIMP_U="531df057c1ab911641e3b1e06";
  const REACT_APP_MAILCHIMP_ID="01a00e3684";

  const postUrl = `${REACT_APP_MAILCHIMP_URL}?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}
