export default function EditPost() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    
    <form className="d-flex flex-column" method="post" onSubmit={handleSubmit}>
      <label>
        <a className="text-white"> Name </a> 
      </label>
      <input name="contactName" placeholder="Name" />
      <label>
        Email 
      </label>
      <input name="contactEmail" placeholder="johndoe@email.com" />
      <label>
        Message
        <textarea
          name="contactMessage"
          placeholder="Leave a message!"
          rows={4}
          cols={40}
        />
      </label>
      <hr />
      <button type="reset">Submit</button>
    </form>
  );
}