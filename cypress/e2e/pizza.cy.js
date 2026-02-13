describe('Pizza Order E2E Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.contains('ACIKTIM').click();
    cy.get('input[type="checkbox"]').should('have.length.at.least', 4);
  });

  it('Geçerli bilgilerle sipariş oluşturulur', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', { statusCode: 200, body: {} }).as('orderSubmit');

    cy.get('input[placeholder="İsminizi giriniz"]').type('Gözde Dinçel');
    cy.get('input[name="size"][value="M"]').check({ force: true });
    cy.get('select').select('Süpper İnce');
    cy.get('input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('input[type="checkbox"]').eq(1).check({ force: true });
    cy.get('input[type="checkbox"]').eq(2).check({ force: true });
    cy.get('input[type="checkbox"]').eq(3).check({ force: true });

    cy.get('button[type="submit"]').click();
    cy.wait('@orderSubmit');
    cy.contains('SİPARİŞ ALINDI');
  });

  it("4'ten az malzeme seçilirse sipariş ver butonu disabled olur", () => {
    cy.get('input[placeholder="İsminizi giriniz"]').type('Gözde Dinçel');
    cy.get('input[name="size"][value="L"]').check({ force: true });
    cy.get('select').select('Orta');
    cy.get('input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('input[type="checkbox"]').eq(1).check({ force: true });
    cy.get('input[type="checkbox"]').eq(2).check({ force: true });

    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('İsim 3 karakterden az olursa hata verir', () => {
    cy.get('input[placeholder="İsminizi giriniz"]').type('Al');
    cy.get('input[name="size"][value="S"]').check({ force: true });
    cy.get('select').select('Kalın');
    cy.get('input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('input[type="checkbox"]').eq(1).check({ force: true });
    cy.get('input[type="checkbox"]').eq(2).check({ force: true });
    cy.get('input[type="checkbox"]').eq(3).check({ force: true });

    cy.get('form').submit();
    cy.contains('İsim en az 3 harf olmalıdır.');
  });

  it('Ana Sayfaya Dön butonu çalışır', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', { statusCode: 200, body: {} }).as('orderSubmit');

    cy.get('input[placeholder="İsminizi giriniz"]').type('Gözde Dinçel');
    cy.get('input[name="size"][value="L"]').check({ force: true });
    cy.get('select').select('Süpper İnce');
    cy.get('input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('input[type="checkbox"]').eq(1).check({ force: true });
    cy.get('input[type="checkbox"]').eq(2).check({ force: true });
    cy.get('input[type="checkbox"]').eq(3).check({ force: true });

    cy.get('button[type="submit"]').click();
    cy.wait('@orderSubmit');
    cy.contains('SİPARİŞ ALINDI');

    cy.contains('Ana Sayfaya Dön').click();
    cy.contains('ACIKTIM');
  });
});
