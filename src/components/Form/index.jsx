
const Form = ({addUser}) => {

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdaki inputlardan bir obje oluştur
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());
  
    // kullanıcıyı listeye ekle
     addUser(newUser);

     // formu sıfırla
     e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="my-5 ">
      <div>
        <label htmlFor="name">İsim</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          placeholder="ör:Jinda"
        />
      </div>

      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
        id="email"
          type="text"
          name="email"
          className="form-control"
          placeholder="ör:Jindaa@gmail.com"
        />
      </div>


      <div className="my-4">
        <label htmlFor="">Yaş</label>
        <input
          type="number"
          name="age"
          className="form-control"
          placeholder="ör:18"
        />
      </div>

      <button>Kullanıcı Ekle</button>

    </form>
  )
}

export default Form