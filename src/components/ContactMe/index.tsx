import React from 'react'
import Button from '@/components/Button'

const ContactMe = (): JSX.Element => {
  const fnameRef = React.useRef<HTMLInputElement>(null)
  const lnameRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const messageRef = React.useRef<HTMLTextAreaElement>(null)

  const [name, setName] = React.useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      firstName: (event.target as HTMLFormElement).first.value,
      lastName: (event.target as HTMLFormElement).last.value,
      email: (event.target as HTMLFormElement).email.value,
      message: (event.target as HTMLFormElement).message.value
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/contactform'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()
    setName(result.data.firstName)
    fnameRef.current!.value = ''
    lnameRef.current!.value = ''
    emailRef.current!.value = ''
    messageRef.current!.value = ''
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-indigo-900 to-rose-900 flex flex-col w-full px-2 md:px-6 lg:px-8 pt-12 pb-24 mx-auto "
    >
      <h2 className="text-gradient text-center text-4xl md:text-5xl w-full">
        Contact Me
      </h2>
      <form
        action="/api/contactform"
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-7 max-w-2xl px-4 py-6 md:p-8 lg:p-16 mx-auto text-xl text-blue-50 rounded-lg [&>div]:mx-auto [&>div]:flex [&>div]:flex-col [&>div]:items-start [&>div]:justify-center [&>div]:gap-1 [&>div]:w-full [&>div>*]:w-full [&>div>input]:border [&>div>input]:border-cyan-600 focus:[&>div>input]:border-blue-300 [&>div>input]:bg-inherit [&>div>input]:rounded-md [&>div>input]:outline-none [&>div>input]:px-2 [&>div>input]:py-1 [&>div>input] [&>div>textarea]:border-cyan-600 focus:[&>div>textarea]:border-blue-300 [&>div>label]:ml-1"
      >
        <div>
          <label htmlFor="first">First Name*</label>
          <input ref={fnameRef} type="text" id="first" name="first" required />
        </div>
        <div>
          <label htmlFor="last">Last Name*</label>
          <input ref={lnameRef} type="text" id="last" name="last" required />
        </div>
        <div>
          <label htmlFor="email">E-mail*</label>
          <input ref={emailRef} type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message*</label>
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            rows={4}
            cols={40}
            required
            minLength={10}
            className="text-skin-dark bg-inherit border border-blue-400 rounded-lg p-2 outline-none"
          />
        </div>
        <Button variant="" type="submit">
          Get in Touch
        </Button>
        {name && (
          <p className="text-gradient-hero">{`Thank you ${name}. Your message has sent to me.`}</p>
        )}
      </form>
    </section>
  )
}

export default ContactMe
