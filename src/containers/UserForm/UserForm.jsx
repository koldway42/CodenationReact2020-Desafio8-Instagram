import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [success, toggleSuccess] = useState(false);

  function handleName(e) {
    setName(e.target.value)
  }

  function handleUser(e) {
    setUser(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handleProfilePhoto(e) {
    setProfilePhoto(e.target.value)
  }

  function handleSubmit(e) {
    if(name === "") {
      console.log("Nome Inválido");
      return
    };
    if(user === "") {
      console.log("Usuário Inválido");
      return
    };
    if(email === "") {
      console.log("Email Inválido");
      return
    };
    if(profilePhoto === "") {
      console.log("Avatar Inválido");
      return
    };

    const resquestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        username: user,
        email: email,
        avatar: profilePhoto
      })
    }

    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", resquestOptions)
      .then(resp => resp.json())
      .then(data => {
        toggleSuccess(true);
        setTimeout(() => {
          toggleSuccess(false);
        }, 5000);
      })
      .catch(err => console.log(err))

      setEmail("");
      setName("");
      setUser("");
      setProfilePhoto("");
  }

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
          <div className="container">
            <div className="profile-data">
              <div className="user">
                <div className="user__thumb">
                {success ? <SuccessMessage /> : ""}
                  <img src={profilePhoto ? profilePhoto : "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"} alt="#"/>
                </div>
                <p className="user__name">
                    {name.length ? name : "John Doe"}
                    <span>
                      @
                      {user.length ? user.toLowerCase() : "john doe"}
                    </span>
                </p>
              </div>
            </div>
          </div>
      </section>
      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
              <label>Nome</label>
              <input onChange={handleName} type="txt" placeholder="Ex: Fulano da Silva" value={name} />
              <label>Usuário</label>
              <input onChange={handleUser} type="text" placeholder="Ex: fulano_da_silva" value={user} />
              <label>Email</label>
              <input onChange={handleEmail} type="email" placeholder="Ex: fulano@provedor.com" value={email} />
              <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
              <input onChange={handleProfilePhoto} type="text" placeholder="http://..." value={profilePhoto}/>
              <button onClick={handleSubmit} type="button">Cadastrar</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserForm;