import React from "react";
import { Card } from "./Card/Card";



import "./Cards.css";


export const Cards = ({products}) =>{


  

  return (
    <div className="carta">
        <h2 className="titleSection"><svg height="20"  viewBox="0 0 561 677" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M396.613 606.667H432.337C466.364 606.625 498.977 593.093 523.04 569.036C547.097 544.973 560.628 512.359 560.671 478.333V361.667C560.65 346.203 554.499 331.375 543.567 320.437C532.629 309.505 517.801 303.355 502.337 303.333H441.859C439.452 296.531 435.005 290.641 429.124 286.464C423.244 282.287 416.218 280.032 409.004 280H59.0043C49.7231 280 40.8163 283.688 34.255 290.25C27.6936 296.813 24.005 305.72 24.005 315V373.333C24.005 379.776 29.229 385 35.6716 385C42.1143 385 47.3383 379.776 47.3383 373.333V315C47.3383 308.557 52.5623 303.333 59.005 303.333H409.005C412.099 303.333 415.068 304.562 417.255 306.75C419.442 308.937 420.672 311.906 420.672 315V478.333C420.62 524.729 402.166 569.213 369.36 602.021C336.553 634.829 292.068 653.281 245.672 653.333H222.338C175.942 653.281 131.458 634.828 98.6503 602.021C65.8423 569.215 47.3903 524.729 47.3383 478.333V420C47.3383 413.557 42.1143 408.333 35.6716 408.333C29.229 408.333 24.005 413.557 24.005 420V478.333C24.0414 514.297 33.8435 549.579 52.3743 580.401C70.901 611.224 97.457 636.432 129.202 653.333H12.3383C5.89563 653.333 0.671631 658.557 0.671631 665C0.671631 671.443 5.89563 676.667 12.3383 676.667H549.005C555.448 676.667 560.672 671.443 560.672 665C560.672 658.557 555.448 653.333 549.005 653.333H338.805C360.826 641.531 380.436 625.702 396.612 606.666L396.613 606.667ZM537.333 361.667V478.333C537.297 506.172 526.224 532.86 506.541 552.541C486.859 572.223 460.172 583.296 432.333 583.333H413.667C418.375 575.844 422.578 568.052 426.245 560H432.333C453.984 559.974 474.745 551.365 490.052 536.052C505.364 520.745 513.973 499.984 514 478.333V361.667C514 358.573 512.771 355.604 510.583 353.417C508.396 351.229 505.427 350 502.333 350H444V326.667H502.333C511.615 326.667 520.521 330.354 527.083 336.917C533.644 343.479 537.333 352.386 537.333 361.666L537.333 361.667ZM444 478.333V373.333H490.667V478.333C490.63 493.255 484.865 507.599 474.563 518.396C464.255 529.193 450.203 535.625 435.297 536.365C441.073 517.563 444.006 498.001 444 478.335L444 478.333Z" fill="#d47618"/>
<path d="M82.3334 70.0002H210.667C217.109 70.0002 222.333 75.2242 222.333 81.6669C222.333 88.1096 217.109 93.3336 210.667 93.3336H152.333C143.052 93.3336 134.145 97.021 127.584 103.584C121.023 110.146 117.334 119.053 117.334 128.333C117.381 137.604 121.084 146.478 127.636 153.03C134.188 159.582 143.063 163.285 152.333 163.332H175.667C178.761 163.332 181.729 164.562 183.917 166.749C186.104 168.937 187.333 171.905 187.333 174.999C187.344 178.145 186.052 181.15 183.766 183.306C181.636 185.483 178.708 186.697 175.667 186.666H117.333C108.052 186.666 99.1455 190.353 92.5841 196.916C86.0228 203.478 82.3341 212.385 82.3341 221.665C82.381 230.936 86.0842 239.81 92.6363 246.362C99.1884 252.915 108.063 256.618 117.334 256.664H280.667C289.948 256.664 298.855 252.977 305.416 246.414C311.978 239.852 315.666 230.945 315.666 221.665C315.208 216.035 313.27 210.624 310.052 205.982C306.833 201.337 302.442 197.628 297.328 195.227C288.776 189.993 279.021 187.045 269 186.665C265.854 186.675 262.849 185.384 260.692 183.097C258.515 180.967 257.302 178.04 257.333 174.998C257.323 171.852 258.614 168.847 260.901 166.691C263.031 164.514 265.958 163.3 269 163.331H350.666C359.948 163.331 368.854 159.644 375.416 153.081C381.977 146.519 385.666 137.612 385.666 128.332C385.619 119.061 381.916 110.187 375.364 103.635C368.812 97.0826 359.937 93.3796 350.666 93.3326H304C297.557 93.3326 292.333 88.1086 292.333 81.666C292.323 78.5201 293.614 75.5149 295.901 73.3586C298.031 71.1816 300.958 69.968 304 69.9993H362.333C371.614 69.9993 380.521 66.3118 387.082 59.7493C393.644 53.1868 397.332 44.28 397.332 35C397.285 25.7292 393.582 16.8546 387.03 10.3026C380.478 3.75049 371.604 0.0474216 362.333 0.000488281H292.333C285.89 0.000488281 280.666 5.22449 280.666 11.6672C280.666 18.1098 285.89 23.3338 292.333 23.3338H362.333C365.479 23.3234 368.484 24.6151 370.64 26.9016C372.817 29.0318 374.031 31.9589 374 35.0005C374 38.0942 372.77 41.063 370.583 43.2505C368.395 45.438 365.427 46.6672 362.333 46.6672H303.999C294.729 46.714 285.854 50.4172 279.302 56.9693C272.75 63.5214 269.047 72.396 269 81.6666C269 90.9478 272.687 99.8546 279.25 106.416C285.813 112.977 294.719 116.666 303.999 116.666H350.666C353.812 116.656 356.817 117.947 358.973 120.234C361.15 122.364 362.364 125.291 362.333 128.333C362.333 131.426 361.104 134.395 358.916 136.583C356.729 138.77 353.76 139.999 350.666 139.999H268.999C256.494 139.999 244.942 146.671 238.687 157.499C232.437 168.327 232.437 181.671 238.687 192.499C244.943 203.327 256.494 209.999 268.999 209.999C274.791 210.39 280.4 212.197 285.333 215.26C288.265 216.635 290.702 218.869 292.333 221.666C292.333 224.76 291.104 227.728 288.916 229.916C286.729 232.103 283.76 233.333 280.666 233.333H117.333C114.187 233.343 111.182 232.051 109.025 229.765C106.848 227.635 105.635 224.708 105.666 221.666C105.666 215.223 110.89 209.999 117.333 209.999H175.666C184.937 209.952 193.811 206.249 200.363 199.697C206.915 193.145 210.619 184.27 210.666 175C210.666 165.719 206.978 156.812 200.416 150.25C193.853 143.689 184.946 140 175.666 140H152.333C149.187 140.011 146.182 138.719 144.025 136.433C141.848 134.302 140.635 131.375 140.666 128.334C140.666 121.891 145.89 116.667 152.333 116.667H210.666C223.171 116.667 234.724 109.995 240.978 99.1672C247.228 88.339 247.228 74.9952 240.978 64.1672C234.723 53.339 223.171 46.6672 210.666 46.6672H82.3328C79.187 46.6776 76.1818 45.3859 74.0255 43.0994C71.8484 40.9692 70.6348 38.0421 70.6662 35.0005C70.6662 28.5578 75.8902 23.3338 82.3328 23.3338H245.666C252.109 23.3338 257.333 18.1098 257.333 11.6672C257.333 5.22449 252.109 0.000488281 245.666 0.000488281H82.3328C73.0516 0.000488281 64.1448 3.68795 57.5835 10.2505C51.0222 16.813 47.3335 25.7198 47.3335 34.9998C47.3804 44.2706 51.0835 53.1452 57.6356 59.6972C64.1878 66.2493 73.0623 69.9524 82.3329 69.9993L82.3334 70.0002Z" fill="#d47618"/>
<path d="M249.173 370.334L234.007 379.667L218.84 370.334C206.246 362.573 191.179 359.86 176.668 362.74C162.152 365.62 149.267 373.881 140.589 385.865C131.74 398.511 127.72 413.917 129.266 429.281C130.813 444.641 137.819 458.937 149.016 469.573L225.838 544.985C230.375 549.433 237.635 549.433 242.172 544.985L318.974 469.573C330.167 458.938 337.177 444.641 338.72 429.281C340.267 413.917 336.251 398.511 327.397 385.865C318.72 373.886 305.84 365.631 291.334 362.751C276.824 359.876 261.766 362.584 249.173 370.334L249.173 370.334ZM302.652 452.922L234.007 520.334L165.371 452.938C158.152 446.115 153.621 436.932 152.6 427.058C151.579 417.183 154.136 407.266 159.808 399.115C166.36 390.084 176.907 384.818 188.063 385C194.604 384.974 201.032 386.756 206.626 390.157L227.896 403.245H227.891C231.641 405.553 236.37 405.553 240.12 403.245L261.391 390.157H261.386C268.906 385.568 277.859 383.938 286.511 385.584C295.162 387.23 302.896 392.032 308.204 399.057C313.887 407.213 316.454 417.136 315.433 427.026C314.413 436.912 309.871 446.105 302.642 452.922L302.652 452.922Z" fill="#d47618"/>
</svg>{products[0]?.section.toUpperCase()} 
</h2>
      <div className="rowsCard">
      {products?.map((e)=><Card  producto={e}/> )}
       </div>
    </div>
  );
}

// {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}