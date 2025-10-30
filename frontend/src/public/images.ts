const CLOUDINARY_BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL;

export const images = {
    default: {
        heroSection: `${CLOUDINARY_BASE_URL}/v1761397617/hero_section_ddbswz.png`,
        logo: `${CLOUDINARY_BASE_URL}/v1761397617/logo_vv4p1q.png`
    },
    lightMode: {
        bgImage: `${CLOUDINARY_BASE_URL}/v1761397617/BG_Light_qgtgt5.png`,
        adminLogin: `${CLOUDINARY_BASE_URL}/v1761397617/admin_portal_light_tvpycn.png`,
    },
    darkMode: {
        bgImage: `${CLOUDINARY_BASE_URL}/v1761562643/bgDark_fb95gi.png`,
        adminLogin: `${CLOUDINARY_BASE_URL}/v1761562643/dark_admin_portal_slfro5.png`,
    }
}
