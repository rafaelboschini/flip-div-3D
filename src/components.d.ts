/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface CardItem {
    'classNames': string;
  }
  interface CardItemAttributes extends StencilHTMLAttributes {
    'classNames'?: string;
  }

  interface FlipDiv {
    'height': string;
    'width': string;
  }
  interface FlipDivAttributes extends StencilHTMLAttributes {
    'height'?: string;
    'onClicked'?: (event: CustomEvent) => void;
    'width'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'CardItem': Components.CardItem;
    'FlipDiv': Components.FlipDiv;
  }

  interface StencilIntrinsicElements {
    'card-item': Components.CardItemAttributes;
    'flip-div': Components.FlipDivAttributes;
  }


  interface HTMLCardItemElement extends Components.CardItem, HTMLStencilElement {}
  var HTMLCardItemElement: {
    prototype: HTMLCardItemElement;
    new (): HTMLCardItemElement;
  };

  interface HTMLFlipDivElement extends Components.FlipDiv, HTMLStencilElement {}
  var HTMLFlipDivElement: {
    prototype: HTMLFlipDivElement;
    new (): HTMLFlipDivElement;
  };

  interface HTMLElementTagNameMap {
    'card-item': HTMLCardItemElement
    'flip-div': HTMLFlipDivElement
  }

  interface ElementTagNameMap {
    'card-item': HTMLCardItemElement;
    'flip-div': HTMLFlipDivElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
