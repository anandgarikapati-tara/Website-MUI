'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ILLUSTARION - ROLLING DOODLE  ***************************/

export default function RollingDoodle() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 1024 768" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M367.188 255.425C375.709 277.199 384.228 298.973 392.749 320.747C395.9 328.799 394.089 338.553 394.37 347.093C394.939 364.48 395.75 381.767 404.31 397.263C412.3 411.731 422.134 425.327 432.188 438.425C445.834 419.047 466.986 403.896 487.33 392.458C501.346 384.578 516.662 377.575 532.729 375.305C537.724 374.599 543.234 374.121 548.188 375.425C547.518 367.763 547.395 359.982 547.973 352.313C548.879 340.295 552.017 332.135 561.141 324.11C565.782 320.029 570.781 316.35 575.874 312.856C577.691 311.609 583.044 309.398 584.138 307.455C585.1 305.748 584.23 300.831 584.358 298.812C584.809 291.738 585.904 284.646 587.977 277.858C591.898 265.025 598.846 253.172 603.188 240.425C596.722 239.501 590.255 238.578 583.79 237.654C579.412 237.028 576.514 235.184 573.707 238.387C563.985 249.475 555.691 262.246 546.805 274.013C540.946 281.772 535.245 289.569 528.611 296.702C518.008 308.1 498.928 326.555 483.285 312.192C475.252 304.818 474.032 292.153 473.872 281.929C473.655 268.012 475.776 254.092 478.188 240.425C454.525 238.171 430.143 242.042 406.938 246.425C393.597 248.945 380.292 251.863 367.188 255.425Z"
        fill={theme.palette.primary.lighter}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M498.775 172.944C481.354 172.944 473.796 195.993 494.793 195.776C511.173 195.606 519.812 172.944 498.775 172.944ZM492.107 200.183C465.96 200.183 475.55 168.698 498.874 168.615C527.652 168.514 514.936 200.179 492.107 200.183ZM776.628 605.343C766.022 607.538 755.368 609.817 745.047 613.139C738.716 615.177 731.536 621.013 728.111 612.476C726.692 608.941 726.118 605.195 724.403 601.764C722.429 597.813 719.835 594.19 717.087 590.747C710.829 582.91 704.284 574.667 697.167 567.63C683.35 553.968 670.393 538.9 653.619 529.008C649.309 526.467 645.729 522.394 641.575 519.465C637.11 516.318 632.629 513.199 628.05 510.219C618.673 504.117 609.116 498.282 599.425 492.693C604.303 486.779 611.035 482.796 617.281 478.515C623.963 473.934 630.535 469.145 637.129 464.445C640.019 462.386 641.423 461.856 644.646 463.625C647.612 465.254 650.516 467.297 653.349 469.151C660.299 473.698 666.476 479.054 672.009 485.245C683.927 498.58 697.872 509.345 711.141 521.243C724.605 533.316 738.02 546.005 749.459 560.048C755.588 567.572 761.624 575.421 766.938 583.546C769.746 587.839 772.128 592.368 774.577 596.868C775.529 598.619 780.585 604.524 776.628 605.343ZM593.102 481.103C592.778 481.88 592.051 482.564 591.213 481.992C590.987 481.837 591.629 478.173 591.664 477.733C591.918 474.575 591.967 471.403 591.919 468.237C591.828 462.265 591.318 456.311 590.933 450.352C590.154 438.282 590.025 426.164 588.622 414.14C591.617 415.622 595.702 417.774 597.793 420.497C599.508 422.732 599.251 424.686 599.28 427.429C599.371 435.714 600.666 443.957 601.263 452.213C601.504 455.547 601.65 458.875 602.522 462.114C603.258 464.852 604.925 467.893 604.195 470.795C602.947 475.747 596.615 478.07 593.102 481.103ZM609.553 429.311C613.183 431.792 617.337 433.232 618.084 438.049C618.806 442.715 617.814 446.993 619.423 451.576C620.379 454.294 622.423 457.62 620.754 460.276C619.011 463.047 614.638 464.46 612.097 466.39C611.594 460.345 612.019 454.268 611.578 448.221C611.117 441.897 609.553 435.671 609.553 429.311ZM627.6 443.217C630.762 445.755 633.924 448.292 637.086 450.83C633.923 452.552 630.762 454.275 627.6 455.998V443.217ZM580.716 491.762C578.384 493.651 574.384 491.428 572.385 490.054C569.271 487.913 568.723 485.995 569.02 482.287C569.755 473.108 568.072 464.25 566.56 455.191C563.167 434.861 560.408 414.381 558.765 393.832C564.669 396.668 572.465 399.848 576.157 405.584C578.542 409.288 577.843 414.025 577.729 418.236C577.574 423.981 577.093 429.717 577.105 435.466C577.129 446.774 578.396 458.076 578.714 469.381C578.848 474.123 578.832 478.989 581.1 483.292C581.611 484.26 584.251 487.131 584.323 487.925C584.457 489.404 581.811 490.86 580.716 491.762ZM551.997 477.867C544.487 473.96 543.545 463.919 541.772 456.576C539.301 446.34 536.927 435.89 535.496 425.452C534.088 415.189 534.347 404.787 532.745 394.54C532.393 392.291 530.154 387.294 531.096 385.06C532.288 382.236 536.741 382.309 539.249 381.88C541.545 381.486 545.853 379.034 547.335 381.103C548.567 382.823 547.379 386.751 547.088 388.595C545.74 397.19 547.088 405.859 548.068 414.457C550.575 436.432 552.619 458.411 556.353 480.23C554.902 479.441 553.463 478.629 551.997 477.867ZM539.186 500.225C538.967 496.318 538.75 492.411 538.531 488.505C540.813 489.364 543.094 490.223 545.377 491.083C543.581 494.292 541.976 497.728 539.186 500.225ZM531.213 509.954C529.084 512.168 527.198 515.072 524.258 516.293V484.794C526.752 485.163 529.555 484.503 530.576 487.238C531.356 489.329 530.309 492.574 530.61 494.865C531.105 498.642 534.346 506.697 531.213 509.954ZM516.577 463.621C514.39 446.016 513.75 428.259 510.898 410.731C510.253 406.763 509.515 402.914 508.546 399.014C507.932 396.549 506.657 393.547 508.245 391.232C510.691 387.666 517.553 387.769 521.299 386.884C520.848 414.488 522.143 442.638 531.798 468.795C528.615 468.428 517.115 467.957 516.577 463.621ZM515.346 524.002C511.259 526.961 507.559 531.25 502.539 532.63C502.226 520.108 502.041 507.578 501.556 495.062C501.443 492.15 501.366 489.211 501.069 486.31C500.943 485.075 500.114 482.533 500.71 481.293C502.236 478.117 507.833 480.283 510.146 481.721C513.334 483.702 512.978 486.967 512.928 490.465C512.866 494.927 512.936 499.216 513.265 503.681C513.556 507.639 513.925 511.472 514.622 515.372C514.855 516.679 516.719 523.007 515.346 524.002ZM495.728 537.575C490.77 540.292 488.939 535.107 486.667 531.692C485.108 529.348 482.618 527.123 481.989 524.28C481.356 521.42 482.772 518.527 483.012 515.704C483.59 508.921 481.391 501.924 480.537 495.239C479.567 487.645 479.212 479.942 479.212 472.29C482.958 473.991 489.663 474.06 491.01 478.673C491.609 480.721 490.808 483.364 490.685 485.454C490.477 488.974 490.594 492.527 490.551 496.054C490.379 510.032 490.949 523.68 498.718 535.825C497.73 536.422 496.733 537.006 495.728 537.575ZM479.825 546.077C471.436 549.629 463.369 554.157 454.513 556.495C445.654 558.833 436.622 560.946 427.642 562.766C408.849 566.576 389.543 568.806 370.349 568.193C360.954 567.892 351.71 566.656 342.428 565.235C333.029 563.796 324.892 560.412 315.997 557.299C298.706 551.248 280.983 547.325 264.59 538.876C260.634 536.837 256.785 534.606 252.856 532.519C250.769 531.411 248.205 530.935 248.091 528.295C247.974 525.56 250.927 520.539 252.098 518.088C253.912 514.293 256.712 511.277 259.552 508.216C264.369 503.027 268.891 495.31 274.734 491.31C277.956 489.104 279.28 490.452 282.108 492.418C285.831 495.007 290.275 496.85 294.443 498.617C311.589 505.887 331.078 510.291 349.523 512.443C367.683 514.561 385.637 516.621 403.718 512.301C413.952 509.856 423.556 505.744 433.228 501.69C436.426 500.35 440.021 497.404 442.944 499.706C446.073 502.171 447.937 507.259 450.493 510.378C456.613 517.844 464.209 523.653 470.329 531.1C471.814 532.909 484.129 544.255 479.825 546.077ZM239.399 510.351C236.685 514.353 234.241 518.682 233.466 523.521C228.253 519.34 224.695 517.924 228.888 511.317C232.806 505.141 236.289 498.847 239.858 492.453C241.315 489.841 243.478 486.778 243.005 483.611C242.466 480.003 239.251 478.383 236.124 480.011C233.903 481.167 232.231 484.223 230.766 486.181C228.125 489.711 225.826 493.461 223.582 497.251C221.916 500.067 220.339 504.627 218.011 506.786C216.444 508.239 214.464 508.317 214.048 505.474C213.678 502.947 217.429 498.491 218.547 496.481C220.37 493.204 222.376 490.005 223.807 486.528C225.292 482.925 226.263 470.992 219.107 476.924C216.637 478.971 214.558 482.925 212.697 485.517C209.836 489.504 207.149 493.617 204.674 497.855C200.305 494.935 196.147 490.323 190.875 489.067C185.864 487.873 181.364 492.42 177.087 494.516C170.428 497.779 164.141 501.737 157.8 505.564C152.141 508.979 146.122 511.653 140.571 515.266C130.915 521.552 119.155 529.834 107.027 526.099C102.222 524.62 96.9164 521.575 94.3054 517.121C90.7774 511.103 91.6784 503.083 89.4084 496.567C95.8374 500.124 102.613 496.018 108.283 492.954C114.637 489.52 121.228 486.585 127.896 483.815C141.679 478.09 155.971 473.091 169.536 466.916C196.043 454.848 218.389 435.389 244.987 423.592C251.243 441.732 261.579 458.443 275.274 471.91C262.197 483.612 249.299 495.751 239.399 510.351ZM448.79 438.085C445.241 436.409 440.922 436.058 443.384 431.428C445.133 428.141 448.935 425.853 451.337 423.057L454.298 440.925C452.465 439.974 450.658 438.968 448.79 438.085ZM468.881 447.929C468.429 439.023 467.314 429.841 464.031 421.499C463.068 419.053 461.418 416.171 462.795 413.627C464.202 411.027 468.342 409.605 470.897 408.519C472.844 423.694 473.782 439.134 478.296 453.842C474.967 452.928 469.113 452.482 468.881 447.929ZM471.643 508.995C471.661 509.264 471.677 509.532 471.694 509.801C468.277 508.114 464.456 505.505 462.678 502.001C460.814 498.326 461.81 494.101 461.834 490.172C461.86 485.636 461.087 481.248 460.248 476.811C459.3 471.806 459.891 467.114 460.211 462.081C462.955 463.936 467.078 465.244 468.886 468.199C470.778 471.291 469.69 475.321 469.316 478.679C468.204 488.664 469.03 499.292 471.643 508.995ZM503.618 462.819C497.022 461.894 493.512 460.559 492.352 453.705C490.927 445.289 489.426 436.921 488.274 428.461C487.203 420.604 483.52 412.458 483.153 404.622C482.894 399.106 492.159 397.142 496.355 395.089C498.597 417.681 499.712 440.422 503.618 462.819ZM436.248 426.224C435.515 427.906 434.905 429.639 434.239 431.348C429.582 424.436 424.992 417.671 419.569 411.327C414.546 405.449 410.359 399.447 407.785 392.109C404.994 384.156 402.436 375.714 401.594 367.301C400.745 358.819 401.525 350.118 401.72 341.614C401.834 336.673 404.601 324.198 400.726 320.172C399.303 318.693 397.054 319.194 395.444 317.825C393.238 315.95 392.525 312.107 391.614 309.53C385.87 293.293 380.808 276.564 372.349 261.469C383.63 256.641 396.396 254.215 408.281 251.262C420.761 248.161 433.724 246.246 446.534 245.18C452.719 244.666 458.914 244.448 465.12 244.494C470.156 244.532 475.194 243.69 473.488 250.105C470.909 259.798 469.041 269.728 469.163 279.805C469.34 294.519 473.107 314.048 488.1 320.754C511.454 331.198 529.874 306.102 541.832 290.192C550.19 279.071 558.25 268.074 565.465 256.137C567.824 252.235 569.84 246.219 574.335 244.272C579.912 241.857 587.957 243.531 593.85 243.531C593.403 250.638 592.95 256.589 589.869 263.127C586.883 269.462 584.439 275.84 582.43 282.55C580.508 288.968 579.636 294.961 578.839 301.516C578.13 307.341 572.166 305.283 567.902 306.953C557.899 310.871 552.509 322.736 548.552 331.887C546.024 337.734 543.413 343.72 542.335 350.04C541.045 357.601 541.974 365.295 542.265 372.897C540.539 373.264 538.647 371.869 537.02 371.484C534.539 370.898 531.831 370.88 529.303 371.045C523.733 371.41 518.085 372.405 512.65 373.645C500.898 376.327 489.786 381.165 479.143 386.745C461.892 395.789 444.296 407.747 436.248 426.224ZM378.404 309.901C360.763 315.972 342.857 321.632 324.458 324.919C315.409 326.535 306.355 326.19 297.213 325.919C293.012 325.794 289.363 325.101 285.291 324.237C282.192 323.579 277.023 321.974 274.146 323.824C272.47 318.304 263.615 318.202 259.075 317.313C255.381 316.59 252.129 314.727 248.5 313.852C247.138 313.524 245.811 313.58 244.606 312.892C243.449 312.232 242.796 310.733 241.592 310.148C239.862 309.308 237.761 309.252 236.486 308.056C233.53 305.285 230.223 302.818 227.296 300.002C224.34 297.161 222.938 293.489 220.922 289.965C218.566 285.843 214.907 281.787 213.17 277.4C213.933 277.924 214.691 278.454 215.445 278.992C215.032 273.832 213.617 269.295 213.976 263.947C214.154 261.308 213.886 259.616 213.552 257.12C213.297 255.214 213.545 253.645 213.573 251.511C213.649 245.812 215.531 240.595 216.426 235.031C216.724 233.183 216.881 231.2 216.962 229.371C217.035 227.7 215.995 225.476 216.192 223.675C216.973 224.072 217.677 224.577 218.303 225.191C216.549 220.902 222.18 215.802 222.804 211.707C223.743 205.548 217.879 203.986 212.921 204.723C206.248 205.715 200.084 209.658 194.111 212.543C185.933 216.495 177.799 220.465 169.785 224.744C160.384 229.763 152.176 236.42 142.922 241.543C141.75 242.192 137.435 244.994 136.653 242.657C135.959 240.585 140.78 236.834 141.951 235.756C147.965 230.218 154.71 225.311 161.458 220.706C166.119 217.524 171.003 214.679 175.775 211.669C180.902 208.435 188.088 204.787 190.1 198.608C191.756 193.524 189.833 188.904 184.101 190.364C176.683 192.254 169.254 197.452 162.444 200.905C155.641 204.356 148.734 207.617 141.973 211.148C140.465 211.935 134.676 216.007 135.651 212.754C136.439 210.123 140.99 206.949 142.953 205.151C145.86 202.486 148.923 199.995 152.077 197.628C158.743 192.625 165.826 188.195 173.019 183.998C177.431 181.424 182.181 178.708 182.415 172.983C182.814 163.162 173.897 168.374 168.752 170.322C161.869 172.926 154.737 174.801 147.837 177.362C141.546 179.696 135.193 182.231 128.485 183.084C125.053 183.521 119.947 183.652 120.773 178.859C121.66 173.723 128.995 170.196 133.002 167.905C139.859 163.984 146.886 162.491 154.501 160.782C162.792 158.921 170.969 156.918 179.354 155.476C196.344 152.553 212.697 151.52 229.861 153.081C237.728 153.796 245.723 153.03 253.503 153.75C258.676 154.228 262.558 157.448 265.37 161.614C272.221 171.768 275.098 185.613 273.997 197.611C272.4 214.993 264.816 229.643 258.334 245.47C253.403 257.509 249.724 274.237 262.947 282.436C269.191 286.308 276.241 286.038 283.234 285.02C292.669 283.646 301.963 281.461 311.182 279.063C329.4 274.324 347.439 269 365.425 263.454C366.217 266.588 383.394 308.184 378.404 309.901ZM476.234 282.496C476.9 273.18 477.232 263.992 478.871 254.777C479.405 251.777 479.644 248.445 482.259 246.461C484.843 244.5 488.68 244.437 491.621 243.227C499.429 240.013 505.811 232.628 511.713 226.809C517.807 220.801 521.767 213.956 524.64 205.929C526.939 199.509 530.585 189.371 526.329 183.057C523.015 178.142 517.614 176.416 519.314 169.336C520.768 163.284 526.787 159.877 532.014 163.949C535.281 166.493 538.952 172.672 538.952 164.272C552.882 167.356 567.277 162.483 579.448 155.872C581.827 154.579 584.744 152.527 587.163 154.564C588.761 155.91 589.281 158.561 591.032 160.055C592.861 161.616 595.732 162.483 596.297 165.095C596.733 167.108 595.463 170.244 594.919 172.105C593.534 176.847 591.667 181.695 587.874 185.012C586.232 186.448 580.596 191.305 578.484 189.25C576.044 186.877 581.338 179.182 574.611 183.588C572.204 185.165 571.458 185.241 570.432 188.121C569.227 191.504 568.678 195.095 568.2 198.637C565.585 197.782 561.432 194.999 558.759 197.022C556.228 198.939 557.564 202.95 559.647 204.617C561.785 206.328 566.142 206.648 568.642 205.548C572.639 203.789 572.658 199.293 573.512 195.6C575.77 197.237 577.281 200.141 580.526 199.584C570.664 211.277 557.678 219.375 542.254 219.401C535.28 219.413 532.646 222.094 531.255 228.893C529.835 235.838 529.874 243.41 529.865 250.455C529.857 256.204 530.066 262.087 531.822 267.611C532.985 271.272 535.254 274.839 536.689 268.852C537.461 265.638 536.913 261.947 536.881 258.658C536.863 256.59 536.167 252.814 537.52 251.112C539.023 249.22 542.511 250.263 544.603 250.243C548.995 250.201 553.198 248.561 557.593 248.561C551.099 258.127 543.743 267.071 537.526 276.83C531.17 286.809 523.444 296.182 514.081 303.508C506.259 309.628 495.369 312.787 486.489 306.826C478.871 301.713 475.604 291.305 476.234 282.496ZM597.25 194.81C600.086 198.856 590.935 206.821 587.425 206.76C588.321 205.319 595.476 192.279 597.25 194.81ZM603.483 250.198C604.524 247.207 610.408 247.454 612.85 247.374C618.175 247.199 623.51 247.186 628.84 247.022C643.411 246.576 657.973 245.524 672.558 245.757C687.656 245.998 702.768 244.562 717.839 245.087C732.158 245.585 746.424 246.917 760.5 249.614C786.289 254.556 813.098 261.602 833.711 278.918C852.226 294.471 866.022 316.979 863.103 341.856C861.302 357.196 860.648 373.308 854.837 387.81C849.898 400.135 839.531 407.772 828.824 414.871C828.683 411.917 836.552 392.796 828.154 395.72C825.445 396.663 823.874 400.392 822.397 402.628C819.807 406.55 817.032 410.39 814.223 414.16C809.126 421.004 803.274 427.476 795.755 431.706C792.843 433.345 783.578 438.167 781.931 432.878C780.567 428.497 789.413 419.625 791.496 416.272C793.342 413.299 794.82 410.428 794.126 406.889C793.858 405.526 793.036 404.273 792.729 402.909C792.481 401.805 792.769 400.115 792.27 399.107C788.93 392.363 785.37 404.044 784.314 406.152C780.66 413.449 772.151 418.199 765.531 422.383C757.297 427.587 749.15 433.225 739.59 435.685C745.573 425.441 751.688 415.263 757.121 404.71C762.179 394.884 765.377 383.515 771.287 374.398C772.285 372.858 772.963 371.19 773.754 369.345C774.247 368.196 774.988 364.281 775.64 363.595C776.01 363.205 778.078 363.057 778.889 362.268C779.889 361.298 780.45 359.761 780.958 358.499C781.561 356.999 783.872 351.777 783.265 350.079C783.138 349.724 781.486 349.878 781.2 349.223C780.864 348.455 781.108 347.895 781.073 347.112C780.994 345.306 782.137 343.942 780.787 342.215C787.613 342.215 781.252 323.859 780.085 320.522C778.788 316.813 776.614 314.149 775.613 310.531C774.392 306.117 770.998 302.248 767.968 298.915C764.937 295.58 761.774 291.603 758.363 288.701C754.83 285.695 750.06 283.994 746.046 281.718C744.256 280.703 742.341 279.355 740.286 278.943C739.619 279.141 738.955 279.348 738.293 279.562C737.522 279.158 736.837 278.639 736.239 278.005C732.401 276.01 728.641 275.291 724.321 274.769C702.972 272.189 680.089 271.724 658.656 273.535C647.52 274.475 636.199 275.547 625.231 277.731C613.873 279.993 602.698 282.881 591.215 284.545C593.808 272.606 599.485 261.674 603.483 250.198ZM665.272 103.727C667.242 103.465 666.415 106.15 665.779 106.958C664.951 106.007 664.782 104.93 665.272 103.727ZM941.875 671.549C940.262 663.779 934.729 655.767 928.351 651.122C920.481 645.389 911.594 645.324 902.347 645.791C891.749 646.327 881.456 648.177 871.019 649.952C860.412 651.756 849.974 653.308 839.68 656.536C835.556 657.829 831.365 658.918 827.298 660.376C824.265 661.464 820.759 663.55 819.241 659.589C816.48 652.392 827.098 649.264 831.325 646.228C833.627 644.574 836.686 642.184 833.798 639.623C830.384 636.597 824.597 639.508 821.116 640.761C817.903 641.918 814.643 642.319 815.46 637.186C816.003 633.777 820.428 631.567 822.904 629.576C825.95 627.127 836.643 619.913 829.783 616.256C822.48 612.364 818.38 622.075 812.141 622.575C806.649 623.015 806.684 609.508 805.148 605.809C801.27 596.466 791.56 606.689 787.198 601.055C785.399 598.732 786.02 594.551 785.348 591.828C784.242 587.344 781.677 582.944 779.606 578.835C775.02 569.744 769.723 561.01 763.796 552.731C757.876 544.461 751.317 537.35 743.853 530.473C736.367 523.576 729.842 515.739 722.48 508.717C707.825 494.74 690.935 483.238 675.918 469.603C672.452 466.455 669.148 463.173 665.1 460.758C661.384 458.542 655.24 457.347 652.279 454.194C650.354 452.145 650.671 449.263 649.736 446.741C648.154 442.468 644.352 439.575 641.097 436.588C625.963 422.703 610.129 408.908 592.358 398.467C583.739 393.402 575.007 387.098 565.76 383.285C562.772 382.052 558.732 381.542 556.273 379.285C553.696 376.919 553.21 372.784 552.235 369.586C546.188 349.75 558.644 329.208 573.766 316.883C576.456 314.691 580.333 312.882 582.062 309.813C583.956 306.451 584.046 302.138 586.067 298.72C589.81 292.389 599.994 293.262 606.424 291.824C645.25 283.138 691.328 279.774 729.385 293.631C745.377 299.453 759.113 309.253 765.23 325.574C767.991 332.94 769.444 340.929 769.214 348.802C768.959 357.574 765.748 365.712 762.811 373.882C759.28 383.706 755.329 393.385 750.754 402.772C746.626 411.245 741.393 418.872 736.835 427.071C734.004 432.164 729.514 441.555 735.992 445.77C741.158 449.131 749.359 447.166 754.455 444.708C762.077 441.031 767.713 434.431 774.384 429.405C774.413 434.385 769.984 438.845 772.002 443.883C774.006 448.888 779.445 448.239 783.742 447.018C788.649 445.623 793.736 443.457 798.226 441.05C803.9 438.009 807.981 433.346 812.801 429.21C821.269 421.945 832.521 419.511 841.59 413.212C850.964 406.701 857.44 396.845 861.392 386.271C865.968 374.024 867.839 360.892 869.416 347.978C870.975 335.202 871.739 322.609 867.508 310.236C859.462 286.704 843.135 268.148 821.191 256.509C774.886 231.948 722.58 232.953 671.724 234.301C657.786 234.671 643.835 234.858 629.917 235.771C623.519 236.191 617.107 236.713 610.752 237.575C608.814 237.838 604.476 239.32 602.749 237.732C601.417 236.508 602.198 233.932 600.99 232.455C598.116 228.943 591.704 229.846 587.876 230.314C583.041 230.903 577.346 231.007 572.999 233.363C568.82 235.628 567.366 240.373 562.187 240.444C556.428 240.522 550.41 239.153 544.608 238.933C540.044 238.76 535.993 237.188 540.365 232.189C543.698 228.377 549.281 228.4 553.813 227.537C562.192 225.942 581.24 211.931 587.516 221.646C589.239 224.312 589.116 225.279 592.427 226.445C595.488 227.524 598.963 228.048 602.17 228.574C608.137 229.552 615.076 230.339 620.914 228.257C629.988 225.02 631.864 214.826 633.982 206.577C643.673 211.725 658.307 214.116 667.876 207.386C675.917 201.73 678.809 189.873 678.462 180.566C678.359 177.798 677.992 174.959 677.007 172.354C676.094 169.939 673.632 167.428 673.723 164.742C673.803 162.403 676.01 160.371 677.023 158.41C678.526 155.5 679.248 152.044 679.546 148.8C680.635 136.891 671.737 130.246 662.487 124.767C667.92 118.299 673.995 111.844 673.521 102.783C673.08 94.3276 666.398 88.4436 659.507 84.4776C653.344 80.9306 647.126 79.5576 640.212 78.6976C637.199 78.3226 636.047 78.6316 636.528 75.5236C636.909 73.0556 638.683 70.8626 639.23 68.4196C642.417 54.1846 628.349 48.7666 616.965 47.5266C598.219 45.4846 580.838 49.3016 565.611 60.3636C554.484 36.9336 517.38 48.4936 507.04 66.6516C505.683 69.0326 504.682 71.6196 504.214 74.3256C503.902 76.1366 504.882 80.4066 503.978 81.7826C502.216 84.4656 495.194 81.9256 492.719 82.0536C488.185 82.2866 483.329 84.6366 479.667 87.2006C464.194 98.0366 464.977 120.302 468.692 136.657C458.746 138.006 448.694 146.233 448.493 156.81C448.391 162.118 450.315 168.106 453.42 172.397C456.598 176.791 462.396 179.727 462.991 185.569C463.616 191.715 462.319 195.32 467.457 199.954C471.223 203.352 476.205 206.097 480.963 207.818C492.1 211.846 504.773 210.418 515.592 206.073C510.093 214.754 501.294 222.492 492.723 228.064C488.879 230.564 484.36 233.776 480.028 235.331C475.327 237.019 469.507 234.074 464.647 233.667C442.812 231.84 420.327 235.813 399.314 241.239C376.572 247.111 354.09 253.562 331.518 260.086C320.343 263.316 309.186 266.728 297.896 269.537C289.419 271.646 279.976 273.501 271.216 272.007C263.748 270.732 260.085 265.696 262.491 258.14C265.661 248.187 271.846 238.905 275.679 229.129C282.769 211.046 286.282 190.271 280.082 171.444C277.571 163.82 273.998 154.969 267.162 150.221C263.548 147.711 259.025 146.231 255.104 144.248C250.122 141.728 244.768 139.904 239.379 138.469C217.728 132.704 194.886 135.399 173.263 139.84C153.732 143.852 123.39 149.541 114.667 170.469C111.684 177.625 110.6 189.722 118.016 194.714C124.399 199.009 134.035 196.23 140.243 192.987C134.193 199.946 126.68 206.58 123.761 215.613C122.734 218.793 121.943 223.182 124.018 226.13C127.034 230.414 132.162 227.895 136.213 226.89C131.461 233.019 124.618 242.79 129.469 250.624C134.836 259.29 145.655 253.481 152.334 249.862C162.244 244.493 172.578 239.966 182.507 234.629C187.826 231.771 193.042 228.738 197.681 224.848C201.522 221.627 204.78 218.208 210.081 217.819C203.163 230.878 196.344 244.46 196.47 259.603C196.588 273.704 202.124 290.467 209.604 302.409C217.431 314.904 230.067 322.596 243.402 328.122C257.923 334.14 272.735 338.203 288.508 338.856C319.254 340.129 352.399 332.968 378.932 317.248C380.917 316.072 380.988 315.661 382.846 317.023C385.227 318.767 387.138 325.05 388.627 327.687C392.992 335.421 391.702 341.923 390.877 350.401C389.413 365.459 392.704 380.673 397.336 394.928C401.963 409.173 409.654 420.448 419.284 431.778C423.605 436.861 428.098 440.874 433.935 444.135C440.282 447.682 445.693 450.772 448.156 457.991C450.208 464.009 449.875 469.152 447.022 474.817C446.284 476.282 444.868 480.763 443.516 481.784C442.228 482.758 441.887 481.887 440.693 482.204C438.514 482.782 437.892 483.105 436.131 484.776C431.421 489.246 424.45 490.429 418.349 492.253C409.956 494.764 401.317 497.201 392.527 497.645C377.387 498.411 360.087 498.323 345.511 493.961C330.831 489.567 315.617 487.039 301.493 480.901C295.071 478.11 292.111 476.682 290.748 469.693C290.024 465.985 288.987 465.695 285.88 464.629C282.312 463.403 280.883 461.717 278.78 458.473C275.017 452.671 271.434 446.78 267.937 440.816C263.556 433.347 258.074 426.49 253.952 418.892C251.488 414.352 249.617 406.37 243.2 406.192C239.391 406.087 235.242 408.857 231.82 410.266C227.648 411.984 223.442 413.618 219.279 415.358C203.254 422.058 188.944 432.122 174.3 441.35C158.317 451.421 140.038 458.541 123.116 467.024C115.22 470.982 107.68 475.527 100.463 480.621C95.7964 483.913 86.6854 487.506 87.3674 494.046C85.0584 492.785 82.1694 490.584 79.9604 493.205C78.1364 495.368 79.3874 499.346 79.8464 501.807C81.3554 509.903 83.1504 518.152 88.0844 524.939C95.8994 535.69 110.794 544.506 124.367 542.57C140.959 540.204 154.266 528.402 168.524 520.649C173.732 517.817 178.96 515.18 183.893 511.892C186.8 509.955 191.92 505.777 195.739 506.28C201.565 507.047 196.694 513.94 195.098 516.627C193.409 519.473 191.998 522.472 190.49 525.419C188.799 528.72 185.988 532.406 185.019 535.983C184.406 538.247 184.705 541.681 187.523 542.247C190.389 542.824 192.842 539.113 194.296 537.274C196.692 534.242 198.687 530.924 200.744 527.66C202.109 525.493 203.794 521.362 206.099 520.007C212.07 516.498 205.54 527.75 204.468 529.286C203.123 531.215 201.173 533.543 200.848 535.924C200.369 539.428 203.223 542.81 206.891 541.971C209.717 541.325 211.623 538.381 213.213 536.212C214.235 534.819 217.289 529.383 219.269 529.331C220.493 529.3 223.583 533.553 224.537 534.475C227.311 537.156 230.599 538.985 234.048 540.656C250.017 548.393 264.537 558.303 281.195 564.733C297.11 570.877 313.705 575.718 330.268 579.71C339.004 581.815 347.17 584.111 356.178 584.852C365.293 585.601 374.277 585.226 383.403 585.038C402.024 584.652 419.572 580.788 437.463 575.858C469.234 567.103 499.085 552.734 523.676 530.484C530.032 524.734 535.785 518.42 541.225 511.807C543.588 508.935 546.063 506.09 548.063 502.951C549.4 500.851 550.615 497.255 552.969 496.056C556.596 494.208 564.957 500.057 568.228 501.678C571.81 503.454 575.476 505.774 579.379 506.701C580.846 507.049 582.274 507.079 583.711 507.578C585.145 508.077 586.837 509.652 588.473 509.3C594.564 507.987 584.579 496.256 593.514 502.198C607.786 511.689 621.129 523.037 634.582 533.644C637.949 536.299 641.401 538.633 645.001 540.96C648.371 543.139 650.954 546.107 654.179 548.465C661.24 553.626 667.899 559.136 674.322 565.079C680.686 570.967 686.788 577.196 693.512 582.678C700.103 588.052 705.239 594.257 710.787 600.661C716.2 606.909 720.24 614.093 724.082 621.371C720.869 620.251 718.173 618.34 716.407 622.528C715.268 625.223 716.241 628.92 716.975 631.602C719.331 640.201 724.276 647.919 727.248 656.309C730.632 665.867 735.632 675.042 738.449 684.767C740.941 693.371 740.354 702.896 743.918 711.234C746.844 718.08 757.502 716.495 763.657 717.107C773.497 718.085 783.221 719.192 793.115 719.499C813.699 720.136 834.549 721.695 855.132 720.901C873.853 720.178 892.532 719.029 911.192 717.419C916.298 716.978 927.663 715.955 928.838 709.25C929.598 704.919 925.747 705.57 922.829 705.84C918.673 706.225 914.471 706.163 910.3 706.234C890.319 706.576 870.7 706.85 850.757 705.329C830.362 703.774 809.981 703.388 789.573 702.63C780.375 702.288 771.439 702.125 762.268 702.542C759.53 702.666 756.166 702.995 754.634 700.343C753.096 697.679 753.31 691.344 752.615 688.345C750.193 677.913 744.876 668.672 741.3 658.649C737.694 648.537 734.102 638.462 729.497 628.748C744.256 626.155 758.994 623.235 773.546 619.65C779.469 618.19 785.721 617.214 791.47 615.23C797.825 613.038 797.967 614.236 799.178 620.244C800.233 625.479 801.435 629.205 796.65 632.691C791.681 636.312 785.598 638.481 781.12 642.78C777.03 646.706 777.853 652.33 784.421 651.518C790.919 650.715 798.368 645.818 804.254 643.088C805.076 646.649 805.843 649.186 803.54 652.261C801.1 655.517 797.382 657.596 794.629 660.549C792.597 662.728 790.464 665.924 793.804 668.036C797.239 670.208 800.669 667.37 803.238 665.407C805.183 663.92 808.389 660.637 810.977 662.479C813.671 664.396 812.245 669.255 813.836 671.871C816.524 676.29 818.382 673.02 821.001 671.152C825.215 668.145 833.809 668.981 838.829 668.565C844.853 668.066 850.73 666.956 856.715 666.217C863.846 665.337 871.03 665.294 878.153 664.278C889.081 662.718 901.079 658.269 912.045 661.06C929.142 665.412 937.431 683.759 934.718 700.295C934.184 703.554 931.55 710.745 934.586 713.538C937.435 716.16 939.484 711.454 940.519 709.202C945.937 697.408 944.427 683.849 941.875 671.549Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M743.398 200.623C766.887 198.237 791.204 203.535 813.864 209.319C834.208 214.511 853.988 223.052 867.744 239.495C869.907 242.081 872.319 247.753 875.248 249.416C879.739 251.968 879.257 245.696 878.134 243.148C874.507 234.922 866.395 226.261 859.809 220.335C844.118 206.218 823.183 199.672 802.873 195.633C790.533 193.179 777.843 191.802 765.255 191.782C758.981 191.773 752.72 192.468 746.598 193.856C744.65 194.298 741.818 194.701 740.796 196.724C739.649 198.997 740.673 200.899 743.398 200.623Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191.679 343.664C198.017 350.273 206.513 354.92 215.519 356.58C220.216 357.445 227.473 358.75 231.801 356.044C233.989 354.677 235.145 352.006 233.739 349.538C232.068 346.605 227.691 346.715 224.823 346.311C214.224 344.822 205.519 341.924 197.435 334.668C190.015 328.009 184.984 319.503 181.412 310.261C179.749 305.955 179.02 301.574 177.912 297.125C177.285 294.607 175.636 288.723 172.917 293.001C168.663 299.695 174.138 313.285 176.573 319.758C179.944 328.724 185.05 336.749 191.679 343.664Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M445.992 101.546C452.025 95.3385 455.011 87.1115 461.895 81.4725C463.179 80.4225 468.108 78.2145 468.051 76.3065C467.976 73.7965 465.066 74.2305 463.555 74.7205C456.12 77.1305 442.024 93.6065 445.992 101.546Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M559.896 191.433C562.364 189.438 568.334 184.318 567.927 180.741C567.546 177.387 564.784 178.232 562.621 179.581C561.69 180.162 559.56 182.602 558.166 181.963C556.747 181.314 557.828 181.54 557.278 180.329C556.513 178.641 557.764 174.028 554.499 175.35C552.558 176.136 551.592 180.73 551.458 182.496C551.121 186.922 554.178 196.058 559.896 191.433Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M540.314 206.75C540.734 209.325 544.332 214.263 547.381 211.624C549.818 209.516 546.954 207.1 545.887 205.067C545.196 203.749 544.265 199.054 542.324 199.132C539.292 199.253 540.008 204.875 540.314 206.75Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M529.438 176.358C530.196 173.84 527.4 164.088 523.711 167.045C520.699 169.461 524.348 171.989 525.733 173.641C526.408 174.447 528.585 179.198 529.438 176.358Z"
        fill={theme.palette.text.primary}
      />
    </svg>
  );
}