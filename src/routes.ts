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

import HomePage from './containers/HomePage';
import CartPage from './containers/CartPage';
import CategoryPage from './containers/CategoryPage';
import CheckoutPage from './containers/CheckoutPage';
import ProductDetailPage from './containers/ProductDetailPage';
import ProfilePage from './containers/ProfilePage';
import OrderHistoryPage from './containers/OrderHistoryPage';
import PurchaseReceiptPage from './containers/PurchaseReceiptPage';
import RegistrationPage from './containers/RegistrationPage';
import CheckoutAuthPage from './containers/CheckoutAuthPage';
import SearchResultsPage from './containers/SearchResultsPage';
import MaintenancePage from './containers/MaintenancePage';
import AboutUsPage from './containers/AboutUsPage';
import ContactUsPage from './containers/ContactUsPage';
import TermsAndConditionsPage from './containers/TermsAndConditionsPage';
import OrderReviewPage from './containers/OrderReviewPage';
import WishListsPage from './containers/WishListsPage';
import ShippingReturnsPage from './containers/ShippingReturns';
import ProductsComparePage from './containers/ProductsComparePage';
import WriteReview from './containers/WriteReviewPage';
import ChangePasswordForm from './containers/ChangePasswordPage';
import ResetPasswordForm from './containers/ResetPasswordPage';
import B2BMain from './containers/b2b/B2BMain';
import Accounts from './containers/b2b/Accounts';
import AccountMain from './containers/b2b/AccountMain';
import RequisitionList from './containers/b2b/RequisitionList';
import RequisitionPageMain from './containers/b2b/RequisitionPageMain';
import AddPaymentMethod from './containers/AddPaymentMethod';
import CompanyPage from './containers/CompanyPage';
import IndustriesPage from './containers/IndustriesPage';
import ServicesPage from './containers/ServicesPage';
import SupportPage from './containers/SupportPage';
import PrivacyPoliciesPage from './containers/PrivacyPoliciesPage';

const router = [{
  path: '/',
  exact: true,
  component: HomePage,
}, {
  path: '/mycart',
  component: CartPage,
}, {
  path: '/category',
  exact: true,
  component: CategoryPage,
}, {
  path: '/category/:id',
  exact: true,
  component: CategoryPage,
}, {
  path: '/category/:id/*',
  exact: true,
  component: CategoryPage,
}, {
  path: '/checkout/:cart?',
  component: CheckoutPage,
}, {
  path: '/itemdetail',
  exact: true,
  component: ProductDetailPage,
}, {
  path: '/itemdetail/:url',
  component: ProductDetailPage,
}, {
  path: '/order/:cart?',
  component: OrderReviewPage,
}, {
  path: '/profile',
  component: ProfilePage,
}, {
  path: '/orderDetails/:url',
  component: OrderHistoryPage,
}, {
  path: '/purchaseReceipt',
  component: PurchaseReceiptPage,
}, {
  path: '/registration',
  component: RegistrationPage,
}, {
  path: '/signIn',
  component: CheckoutAuthPage,
}, {
  path: '/search',
  exact: true,
  component: SearchResultsPage,
}, {
  path: '/search/:keywords',
  exact: true,
  component: SearchResultsPage,
}, {
  path: '/search/:keywords/*',
  exact: true,
  component: SearchResultsPage,
}, {
  path: '/aboutus',
  component: AboutUsPage,
}, {
  path: '/maintenance',
  component: MaintenancePage,
}, {
  path: '/contactus',
  component: ContactUsPage,
}, {
  path: '/termsandconditions',
  component: TermsAndConditionsPage,
}, {
  path: '/privacypolicies',
  component: PrivacyPoliciesPage,
}, {
  path: '/company',
  component: CompanyPage,
}, {
  path: '/industries',
  component: IndustriesPage,
}, {
  path: '/services',
  component: ServicesPage,
}, {
  path: '/support',
  component: SupportPage,
}, {
  path: '/wishlists',
  component: WishListsPage,
}, {
  path: '/shippingreturns',
  component: ShippingReturnsPage,
}, {
  path: '/productscompare/:products',
  component: ProductsComparePage,
}, {
  path: '/write-a-review',
  component: WriteReview,
}, {
  path: '/password_change',
  component: ChangePasswordForm,
}, {
  path: '/password_reset',
  component: ResetPasswordForm,
}, {
  path: '/newpaymentform/paymentdata',
  component: AddPaymentMethod,
}, {
  path: '/b2b/account/:uri',
  component: AccountMain,
}, {
  path: '/b2b/requisition-list-item',
  exact: true,
  component: RequisitionPageMain,
}, {
  path: '/b2b',
  component: B2BMain,
  routes: [
    {
      path: '/b2b',
      exact: true,
      component: Accounts,
    },
    {
      path: '/b2b/address-book',
      render: () => 'Address Book',
    },
    {
      path: '/b2b/orders',
      render: () => 'Orders',
    },
    {
      path: '/b2b/approvals',
      render: () => 'Approvals',
    },
    {
      path: '/b2b/invitations',
      render: () => 'Invitations',
    },
    {
      path: '/b2b/requisition-lists',
      exact: true,
      component: RequisitionList,
    },
    {
      path: '/b2b/quotes',
      render: () => 'Quotes',
    },
  ],
}];

export default router;