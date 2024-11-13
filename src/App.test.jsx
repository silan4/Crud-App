import App from "./App"
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

it("Uygulama dığru şekilde çalışıyor mu ?"), async () => {
    render(<App />);
    user.setup();

    // gerekli elemanları çağırma
    const nameInp = screen.getByLabelText("İsim");
    const mailInp = screen.getByLabelText("Email");
    const ageInp = screen.getByPlaceholderText("Yaş");
    const sendBtn = screen.getByRole("button", { name: "Kullanıcı Ekle" })

    //1) inputları doldur
    await user.type(nameInp, 'Veli');
    await user.type(mailInp, 'Veli@gmail.com');
    await user.type(ageInp, '18');

    //2) kullanıcı ekle butonuna taaıkla
    await user.click(sendBtn);

    //3) inputlara girdiğimiz veriye uygun bir şekilde tablo hücreleri ekrana basılır
    screen.getByRole("cell" , {name:"Veli"});
    screen.getByRole("cell" , {email:"Veli@gmail.com"});
    screen.getByRole("cell" , {age:"18"}); 
};   