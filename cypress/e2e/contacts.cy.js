describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('/');
      
      cy.get('input[placeholder="Nome"]').type('Carlos Eduardo');
      cy.get('input[placeholder="Telefone"]').type('21987654321');
      cy.get('input[placeholder="E-mail"]').type('carlos.eduardo@email.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Carlos Eduardo').should('exist');
      cy.contains('21987654321').should('exist');
      cy.contains('carlos.eduardo@email.com').should('exist');
    });
  });

  describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('/');
      
      cy.get('input[placeholder="Nome"]').type('Mariana Silva');
      cy.get('input[placeholder="Telefone"]').type('21991234567');
      cy.get('input[placeholder="E-mail"]').type('mariana.silva@email.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Mariana Silva').should('exist');
      cy.contains('21991234567').should('exist');
      cy.contains('mariana.silva@email.com').should('exist');
    });

    describe('Agenda de Contatos - Inclusão', () => {
        it('Deve adicionar um novo contato', () => {
          cy.visit('/');
          
          cy.get('input[placeholder="Nome"]').type('Rafael Souza');
          cy.get('input[placeholder="Telefone"]').type('21999887766');
          cy.get('input[placeholder="E-mail"]').type('rafael.souza@email.com');
          
          cy.contains('button', 'Adicionar').click();
          
          cy.contains('Rafael Souza').should('exist');
          cy.contains('21999887766').should('exist');
          cy.contains('rafael.souza@email.com').should('exist');
        });
      });
  });

  describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('/');
      
      cy.get('input[placeholder="Nome"]').type('Fernanda Lima');
      cy.get('input[placeholder="Telefone"]').type('21993456789');
      cy.get('input[placeholder="E-mail"]').type('fernanda.lima@email.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Fernanda Lima').should('exist');
      cy.contains('21993456789').should('exist');
      cy.contains('fernanda.lima@email.com').should('exist');
    });
  });

  describe('Agenda de Contatos - Alteração', () => {
    it('Deve editar o terceiro contato na lista', () => {
        cy.visit('/');
        cy.wait(1000);

        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('input[placeholder="Nome"]').clear().type('Lucas Andrade');
        cy.get('input[placeholder="E-mail"]').clear().type('lucas.andrade@email.com');
        cy.get('input[placeholder="Telefone"]').clear().type('21990011223');
        
        cy.contains('button', 'Salvar').click();
        
        cy.contains('Lucas Andrade').should('exist');
        cy.contains('lucas.andrade@email.com').should('exist');
        cy.contains('21990011223').should('exist');
    });
});

describe('Agenda de Contatos - Remoção', () => {
    it('Deve remover o quinto contato na lista', () => {
        cy.visit('/');
        cy.wait(1000);

        cy.on('window:confirm', () => true);

        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();

        cy.wait(1000);
        cy.contains('Nome do Contato').should('not.exist');
    });
});
