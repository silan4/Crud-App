import { render,screen } from "@testing-library/react"
import Form from './index';
import user from '@testing-library/user-event';
import { expect } from 'vitest';

it("Formu gönderince 'addUser' doğru parametrelerle çalışıyor mu ?", async() => {
   // fonksiyonu mock'lama (taklit fonksiyonu oluşturma)
   // kaç kere çağrıldı | hangi parametrelerle çağrıldı
   // tarzında testleri yapmamızı sağlayan orijinal fonksiyonu taklit eden yapı
    
    const mock = vi.fn();
  
    render(<Form  addUser={mock}/>);

    user.setup();

  // 1)gerekli elemanları çağır
  const nameInp = screen.getByLabelText('İsim');
  const mailInp = screen.getByLabelText('Email');
  const ageInp = screen.getByPlaceholderText('ör:18');
  const sendBtn = screen.getByRole('button');
  
   // 2) İnputları doldur
    
  // yol-1 >isim inputunu doldur
  await user.click(nameInp);
  await user.keyboard('firat');

  // yol-2 > mail inputunu doldur
   await user.type(mailInp,"firat@gmail.com")
  
   // yol-2 > yaş inputunu doldur
   await user.type(ageInp,"18");

  // 3)formu gönder butonuna tıkla
   await user.click(sendBtn);

  // 4) fonksiyon doğru parametrelerle çalışıyor mu?
   expect(mock).toHaveBeenCalledWith({
    name:'firat',
    email:'firat@gmail.com',
    age:'18',
   });     
});