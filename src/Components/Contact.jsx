import "../assets/styles/style_contact.css"
export const Contact = () => {
  return (
    <>
      <h1 className="title">Contact Us</h1>
      <div className="content">
        <div className="contact-form">
          <form>
            <div className="column1">
              <p>
                <label>First Name</label>
                <input type="text" name="fisrstname" />
              </p>
              <p>
                <label>Last Name</label>
                <input type="text" name="lastname" />
              </p>
              <p>
                <label>Topic</label>
                <input type="text" name="topic" />
              </p>
              <p>
                <label>Email</label>

                <input type="email" name="email" />
              </p>
            </div>

            <div className="column2">
              <p>
                <label>Message</label>
                <textarea name="message" rows="3"></textarea>
              </p>
            </div>
            <p className="block">
              <button type="submit">send</button>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
