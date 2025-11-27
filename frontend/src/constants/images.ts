const { VITE_CLOUDINARY_BASE_URL: CLOUDINARY_BASE_URL } = import.meta.env;

export const images = {
  default: {
    heroSection: `${CLOUDINARY_BASE_URL}/v1761397617/hero_section_ddbswz.png`,
    logo: `${CLOUDINARY_BASE_URL}/v1761397617/logo_ya3duz.png`,
    ajay: `${CLOUDINARY_BASE_URL}/v1764227045/ajay_xllons.png`,
    sonali: `${CLOUDINARY_BASE_URL}/v1764227044/sonali_r436dw.png`,
    appqrcode: `${CLOUDINARY_BASE_URL}/v1763033827/qrcode_dzn7h0.png`,
  },
  light: {
    bgImage: `${CLOUDINARY_BASE_URL}/v1761397617/BG_Light_qgtgt5.png`,
    adminLogin: `${CLOUDINARY_BASE_URL}/v1761397617/admin_portal_light_tvpycn.png`,
    ourMission: `${CLOUDINARY_BASE_URL}/v1762683800/OurMission_llzxml.png`,
    weServe: `${CLOUDINARY_BASE_URL}/v1762683800/people_group_dxwpq1.png`
  },
  dark: {
    bgImage: `${CLOUDINARY_BASE_URL}/v1761562643/bgDark_fb95gi.png`,
    adminLogin: `${CLOUDINARY_BASE_URL}/v1761562643/dark_admin_portal_slfro5.png`,
  },
};
