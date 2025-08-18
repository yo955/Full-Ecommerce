'use client'

import AuthButtons from "./AuthButtons";
import CartAndWishlist from "./CartAndWishlist";
import LanguageToggle from "./LanguageToggle";

const MobileMenu = () => {
   

    return (
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {/*  Mobile Menu */}
            {/* <MobileMenu /> */}

            {/* LanguageToggle */}
            <LanguageToggle />

            {/* Authentication Section */}
            <AuthButtons />

            {/* Wishlist & Shopping Cart */}
            <CartAndWishlist />
        </div>
    )
}

export default MobileMenu