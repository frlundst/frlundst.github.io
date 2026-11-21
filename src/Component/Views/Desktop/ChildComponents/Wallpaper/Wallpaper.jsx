import "./style.css";

// Layered mountain ridges behind the home "desktop".
export const Wallpaper = () => (
    <div className="wallpaper" aria-hidden="true">
        <div className="wallpaper-glow" />
        <svg className="wallpaper-ridges" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice">
            <path fill="#bccad2" d="M0 250 L90 196 L150 222 L230 150 L310 205 L390 168 L470 226 L570 118 L650 186 L730 158 L810 214 L910 104 L990 176 L1070 146 L1150 204 L1250 126 L1330 184 L1440 150 V400 H0 Z" />
            <path fill="#9db1b9" d="M0 296 L100 246 L180 276 L280 214 L360 264 L460 234 L560 286 L660 224 L760 274 L860 244 L960 296 L1060 236 L1160 276 L1260 226 L1360 266 L1440 244 V400 H0 Z" />
            <path fill="#7e9893" d="M0 338 Q180 290 360 326 T720 318 T1080 328 T1440 306 V400 H0 Z" />
            <path fill="#62806c" d="M0 372 Q240 340 480 366 T960 362 T1440 352 V400 H0 Z" />
        </svg>
    </div>
);
