/// <reference types="cypress"/>

Cypress.on('uncaught:exception', () => { return false })

before(() => {
    cy.viewport(1920, 1080);
    })

it('Search Wanted Product and Add to Cart', () => {
    
    //open central website
    cy.visit('https://www.central.co.th/th'); 
    
    //click search bar and input keyword "Speaker"
    cy.get('#autocomplete-0-input').type('Speaker');

    //click filter button
    cy.get('[data-testid="mnu-viewSearchFilterOnAllFilter"] > .d-none').click(); 
     
    //click brand tab to filter by brand
    cy.get('#sidebar-brands > .ais-Panel > .ais-Panel-header > .ais-Panel-collapseButton').click(); 

    //click filter by brand search bar and input "MARSHALL"
    cy.get('#sidebar-brands > .ais-Panel > .ais-Panel-body > :nth-child(1) > .ais-RefinementList > .ais-RefinementList-searchBox > .ais-SearchBox > .ais-SearchBox-form > .ais-SearchBox-input')
    .type('MARSHALL'); 
    
    //click MARSHALL checkbox to filter by MARSHALL brand
    cy.get('#sidebar-brands > .ais-Panel > .ais-Panel-body > :nth-child(1) > .ais-RefinementList > .ais-RefinementList-list > .ais-RefinementList-item > :nth-child(1) > .ais-RefinementList-label > .box')
    .click();
    
    //click color tab to filter by color
    cy.get('#sidebar-color > .ais-Panel > .ais-Panel-header > .ais-Panel-collapseButton').click();

    //click black color selection to filter by black color
    cy.get('#sidebar-color > .ais-Panel > .ais-Panel-body > :nth-child(1) > .ais-RefinementList > .ais-RefinementList-list > :nth-child(1) > :nth-child(1) > .ais-RefinementList-label > .ais-RefinementList-labelText')
    .click();

    //click confirm button to apply filter selection
    cy.get('.sidebar-wrapper > .panel-actions > .show-results').click();
    
    //scroll down to wanted product
    cy.get('[data-testid="lnk-viewProduct-productListImgCDS18649611"]').scrollIntoView();
  
    //select wanted product
    cy.contains('KILBURN II BLACK').click();

    //verify wanted product name
    cy.contains('.pdp-productDetail__desc', 'KILBURN II BLACK');
   
    //add wanted product to cart
    cy.get('.add-to-cart').click();
    
    //check added product in cart
    cy.get('[data-testid="btn-viewCart-bag"] > .icon').click();
    
    //validate correctly added product
    cy.get('[data-testid="lnk-viewCart-itemCDS18649611"]').should('have.text', 'ลำโพง KILBURN II BLACK');

    })
