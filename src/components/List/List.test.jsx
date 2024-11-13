import { render, screen, within } from "@testing-library/react"
import List from "."
import { testUsers } from "../../constants/testData";
import { expect } from "vitest";

// gönderilen her kullanıcı için body kısmına bir satır basılıyor mu?
it("gönderilen her kullanıcı için ekrana satır basılır", () => {
    render(<List users={testUsers} />);

    // table body kısmımnı al
    const body = screen.getByTestId('body');

    // table body satırları seç
    // belirli bir kapsayıcı içerisindeki elemanları seçmek için with kullan
    const rows = within(body).getAllByRole("row");

    // dizideki kullanıcı sayısı kadar satır var mı
    expect(rows).toHaveLength(testUsers.length)
});

// isim email yaş hücreleri users verisine göre ekrana basılıyor mu ?
it("Her bir kullanıcı için email, isim ve yaş hücreleri bulunur" , ()=> {
 render(<List users={testUsers}/>)

 // dizideki her bir kullanıcı için ekrana bu 
 // kullanıcının değerleeini içeren tablo hücresi basılır
  for(const user of testUsers) {
       // kullanıcının ismini içeren tablo hücrsini al
       screen.getByRole("cell",{name:user.name});
  
       // kullanıcının mailini içeren tablo hücresini al
       screen.getByRole("cell", {name:user.email})

       // kullanıcının yaşını içeren tablo hücresini al
       screen.getByRole("cell", {name:user.age})
    }
})