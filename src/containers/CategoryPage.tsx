/**
 * Copyright © 2019 Elastic Path Software Inc. All rights reserved.
 *
 * This is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this license. If not, see
 *
 *     https://www.gnu.org/licenses/
 *
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CategoryItemsMain from '../components/src/CategoryItems/categoryitems.main';

function CategoryPage(props: RouteComponentProps) {
  const { history } = props;
  function handleProductFacetSelection(offerSearch, title) {
    if (window.location.pathname.includes('category')) {
      history.push(`/category/${title}${offerSearch._offersearchresult[0].self.uri}`);
    } else {
      history.push(`/search/${title}${offerSearch._offersearchresult[0].self.uri}`);
    }
  }

  function handleAddToCart() {
    history.push('/mycart');
  }

  function handleAddToWishList() {
    history.push('/account/wishlists');
  }

  function handleAddToRequisitionList() {
    history.push('/b2b/requisition-list-item');
  }

  const productLinks = {
    itemDetail: '/itemdetail',
    productsCompare: '/productscompare',
    productSearch: '/search',
    productCategory: '/category',
  };

  return (
    <div>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      <CategoryItemsMain
        categoryProps={props}
        onProductFacetSelection={handleProductFacetSelection}
        productLinks={productLinks}
        onAddToCart={handleAddToCart}
        onRequisitionPage={handleAddToRequisitionList}
        onAddToWishList={handleAddToWishList}
      />
    </div>
  );
}

export default CategoryPage;
