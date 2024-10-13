"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import InputBox from "../components/InputBox";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/Button";
import { socialLink } from "../common/socialLink";
import Image from "next/image";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * Handles form submission.
   * Sends an email using EmailJS and displays success or error messages.
   *
   * @param e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dbodkzv",
        "template_qmvo4s8",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        "Bvri3pHUOWZ5_HYqF"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email inviata con successo!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Errore nell'invio dell'email.");
        }
      );
  };

  const formValidation =
    formData.firstName.trim().length > 0 &&
    formData.lastName.trim().length > 0 &&
    formData.phone.trim().length > 0;

  return (
    <div className="py-3 md:flex md:gap-3 md:justify-between">
      <ToastContainer />
      <div className="py-4 px-6 flex flex-col gap-3 w-full sm:h-full shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-2xl">
        <div>
          <h2 className="text-white text-2xl my-3 font-semibold">Contatti</h2>
          <form className="" onSubmit={handleSubmit}>
            <div className="md:flex md:gap-6">
              <InputBox
                inputName={"firstName"}
                label="Nome"
                placeholder="Inserisci il tuo nome"
                value={formData.firstName}
                setValue={(value) =>
                  handleChange({
                    target: { name: "firstName", value },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              />
              <InputBox
                inputName={"lastName"}
                label="Cognome"
                placeholder="Inserisci il tuo cognome"
                value={formData.lastName}
                setValue={(value) =>
                  handleChange({
                    target: { name: "lastName", value },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              />
            </div>
            <InputBox
              inputName={"company"}
              label="Azienda"
              placeholder="Inserisci il nome della tua azienda"
              value={formData.company}
              setValue={(value) =>
                handleChange({
                  target: { name: "company", value },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            />
            <InputBox
              inputName={"email"}
              inputType={"email"}
              label="Email"
              placeholder="Inserisci la tua email"
              value={formData.email}
              setValue={(value) =>
                handleChange({
                  target: { name: "email", value },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            />
            <InputBox
              inputName={"phone"}
              inputType={"number"}
              label="Numero di Telefono"
              placeholder="Inserisci il tuo numero di telefono"
              value={formData.phone}
              setValue={(value) =>
                handleChange({
                  target: { name: "phone", value },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            />
            <InputBox
              inputName={"message"}
              inputType={"textarea"}
              label="Messaggio"
              placeholder="Scrivi il tuo messaggio"
              value={formData.message}
              setValue={(value) =>
                handleChange({
                  target: { name: "message", value },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            />
            <Button label="Invia" isDisabled={!formValidation} />
          </form>
        </div>
      </div>
      <div className="py-4 px-6 flex flex-col gap-3 w-full sm:h-full shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-2xl">
        <h3 className="text-xl my-1 ">
          Completa il form e clicca su <strong>Invia</strong> per essere
          ricontattato rapidamente.
        </h3>
        <p>Puoi anche contattarmi direttamente tramite:</p>
        <ul className="pl-5">
          {socialLink.map((item, index) => (
            <li className="mb-3" key={index}>
              <a
                href={item.href}
                target="_blank"
                className="flex items-center gap-3 text-[var(--orange)] transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.label}
                  width={30}
                  height={30}
                />{" "}
                {item.label} {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactForm;
