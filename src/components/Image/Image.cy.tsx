import React from 'react'
import Image from './Image'
import { urlImg } from '../../urls';

describe('ImageComponent', () => {
  it('should display an image from API', () => {
    // Imposta il mock della chiamata API
    cy.intercept(urlImg, { fixture: 'avascan_image.png'} ).as('getImage');

    // Monta il componente
    cy.mount(<Image source={urlImg} alt='Image TokenERC721' />);

    // Verifica che l'immagine sia stata visualizzata correttamente
    cy.get('img')
      .should('have.attr', 'src', urlImg)
      .and('have.attr', 'alt', 'Image TokenERC721');
  });
});

