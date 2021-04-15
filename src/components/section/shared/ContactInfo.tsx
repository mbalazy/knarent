import React from 'react'
import CONSTS from '../../../../theme/CONSTS'
import { P } from '../../../../theme/Typography'

const ContactInfo = () => {
  const { emails, telephones, adress } = CONSTS
  return (
    <>
      <div>
        {adress.map((adres) => (
          <p key={adres}>{adres}</p>
        ))}
      </div>
      <div>
        <P>
          email:{' '}
          {emails.map((email, i) => (
            <span key={email}>
              {i !== 0 && <>,</>} {email}
            </span>
          ))}
        </P>
        <P>
          tel:{' '}
          {telephones.map((tel, i) => (
            <span key={tel}>
              {i !== 0 && <>,</>} {tel}
            </span>
          ))}
        </P>
      </div>
    </>
  )
}

export default ContactInfo
