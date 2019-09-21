import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-free-run-50-masculino/06/HZM-1226-406/HZM-1226-406_detalhe2.jpg?ims=326x"
          alt="tennis"
        />
        <strong>Tenis descrição</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-free-run-50-masculino/06/HZM-1226-406/HZM-1226-406_detalhe2.jpg?ims=326x"
          alt="tennis"
        />
        <strong>Tenis descrição</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-free-run-50-masculino/06/HZM-1226-406/HZM-1226-406_detalhe2.jpg?ims=326x"
          alt="tennis"
        />
        <strong>Tenis descrição</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-free-run-50-masculino/06/HZM-1226-406/HZM-1226-406_detalhe2.jpg?ims=326x"
          alt="tennis"
        />
        <strong>Tenis descrição</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-free-run-50-masculino/06/HZM-1226-406/HZM-1226-406_detalhe2.jpg?ims=326x"
          alt="tennis"
        />
        <strong>Tenis descrição</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-free-run-50-masculino/06/HZM-1226-406/HZM-1226-406_detalhe2.jpg?ims=326x"
          alt="tennis"
        />
        <strong>Tenis descrição</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
