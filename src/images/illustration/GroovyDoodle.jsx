'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ILLUSTARION - GROOVY DOODLE  ***************************/

export default function GroovyDoodle() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 1024 768" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M568.261 182.846C557.623 187.069 550.477 196.921 548.01 207.957C546.868 213.059 547.951 220.847 544.608 224.96C540.606 229.883 534.385 225.622 529.773 228.707C519.252 235.746 530.518 248.452 538.358 250.544C544.61 252.212 550.97 253.234 557.256 254.452C563.159 255.595 566.041 260.812 569.584 265.539C564.69 264.724 559.889 263.491 554.968 262.713C552.85 262.378 549.778 261.325 547.572 261.461C544.911 261.626 543.214 263.479 540.686 263.918C536.339 264.673 533.35 261.883 531.638 267.345C530.377 271.37 532.382 276.181 535.985 278.167C532.801 281.283 525.455 282.121 521.29 283.414C515.256 285.286 509.118 286.502 503.522 289.662C503.522 279.826 503.644 272.039 498.839 263.041C496.507 258.673 492.059 246.404 487.291 244.578C485.858 244.029 483.835 244.332 482.34 243.886C480.787 243.423 479.928 242.072 478.188 242.026C475.022 241.941 471.605 245.638 469.726 248.054C464.974 254.164 465.16 263.939 465.453 271.3C465.756 278.908 466.525 288.459 469.634 295.497C470.356 297.132 471.097 298.97 472.673 299.953C473.818 300.666 475.952 300.103 476.833 300.914C480.032 303.862 475.59 305.55 473.122 307.355C466.817 311.966 461.37 316.434 456.757 322.623C452.862 327.848 446.787 334.19 445.791 340.887C441.504 335.083 438.49 328.535 435.202 322.149C433.335 318.522 433.295 319.257 435.281 316.51C436.829 314.369 439.55 312.141 441.76 310.645C446.28 307.585 450.953 304.291 452.28 298.468C453.283 294.065 450.885 285.929 449.51 281.474C447.753 275.781 443.161 271.413 437.272 274.738C432.91 277.202 430.811 286.011 426.582 287.244C421.81 288.635 422.466 277.066 422.026 273.856C421.207 267.867 418.041 257.795 420.02 251.913C421.561 247.333 428.991 244.892 432.851 242.106C438.584 237.968 444.236 232.698 448.267 226.849C452.4 220.85 452.035 214.741 451.295 207.749C450.863 203.671 450.192 192.572 443.386 194.926C439.469 196.281 421.963 220.113 418.864 211.655C417.991 209.27 419.878 203.259 420.21 200.509C420.452 198.504 420.413 188.949 421.766 187.617C422.286 187.105 428.424 186.278 429.766 185.452C432.984 183.469 435.4 180.87 437.336 177.638C443.748 166.931 436.458 150.195 424.408 147.508C416.553 145.756 412.306 148.511 407.909 154.838C403.654 160.962 395.303 158.315 388.2 159.791C386.863 156.155 391.565 149.002 392.808 145.498C394.639 140.337 396.66 134.978 397.39 129.533C398.812 118.907 396.361 107.445 392.989 97.4313C397.034 98.0513 402.783 97.8053 405.566 100.83C408.356 103.86 409.595 110.081 411.951 113.723C416.497 120.749 421.722 128.416 427.979 134.004C436.149 141.3 439.38 137.893 445.642 131.118C451.989 124.251 448.663 114.559 446.407 106.08C451.543 105.31 457.478 106.755 462.526 107.568C467.102 108.304 475.685 108.47 479.568 111.234C482.473 113.301 481.441 115.554 481.724 119.618C482.105 125.114 482.969 130.671 484.641 135.935C488.043 146.646 495.727 150.322 504.964 143.431C508.173 147.737 511.659 153.432 516.614 155.874C521.477 158.273 530.519 160.247 535.963 160.642C542.815 161.138 548.289 158.09 553.955 154.628C556.728 152.934 557.508 151.544 559.929 152.874C561.718 153.858 564.081 158.507 565.898 160.113C567.933 161.911 570.172 163.566 572.353 165.181C573.37 166.018 574.426 166.802 575.522 167.533C577.932 168.109 578.742 169.539 577.952 171.823C579.476 176.223 579.769 180.884 581.057 185.33C582.578 190.583 586.19 193.445 591.046 195.383C592.73 195.862 594.385 196.43 596.008 197.087C598.902 197.144 599.559 198.314 597.978 200.597C597.977 203.665 594.862 208.331 593.194 210.746C591.557 206.197 585.229 201.131 580.32 203.06C574.612 205.302 574.391 211.862 574.796 216.992C571.23 215.314 568.166 212.891 565.118 210.437C563.636 209.244 561.183 207.861 560.094 206.268C558.206 203.508 558.372 204.939 559.699 201.196C561.167 197.057 572.034 186.873 568.261 182.846Z"
        fill={theme.palette.primary.lighter}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M531.286 17.5993C536.211 18.8863 536.601 20.8953 540.334 23.1103C544.135 25.3663 551.398 23.5263 556.244 25.0123C558.787 25.7923 560.354 27.2033 562.527 28.5673C563.844 29.3943 563.68 29.8343 565.062 30.4083C565.782 30.7063 567.403 30.3473 568.253 30.5323C574.145 31.8213 574.673 38.7583 578.426 40.1183C581.314 41.1663 582.673 39.1363 585.844 41.3683C587.635 42.6293 589.406 44.9843 590.353 46.9423C590.818 47.9033 591.269 51.1363 591.673 51.6173C592.95 53.1373 592.432 52.3113 593.673 53.1643C596.225 54.9183 599.226 54.9063 602.027 57.8603C605.827 61.8683 610.354 65.0443 611.257 70.8313C611.41 71.813 611.441 72.7165 611.404 73.5851L611.371 73.0723C611.438 74.2083 611.506 75.3423 611.572 76.4763C611.516 75.5122 611.458 74.5489 611.402 73.587C611.319 75.5309 610.891 77.2989 610.717 79.3763C610.546 81.4213 610.275 81.4283 610.705 82.8943C610.995 83.8813 612.692 85.2113 613.102 86.6673C616.32 98.0843 597.803 110.944 588.281 104.522C584.392 112.745 581.588 121.398 577.85 129.665C575.803 134.195 565.028 144.792 565.807 148.013C566.448 150.667 572.579 152.452 574.718 153.731C578.594 156.051 582.349 158.85 586.068 161.413C589.3 163.641 592.399 166.013 595.547 168.305L595.439 168.277C597.24 168.694 598.578 169.724 599.604 171.169C601.759 172.632 603.971 174.016 606.295 175.256C609.871 177.165 610.824 177.536 612.354 181.345C613.922 185.242 611.966 183.881 615.382 186.371C622.02 191.209 632.129 193.313 639.647 196.603C656.323 203.898 672.658 207.725 690.993 204.553C707.455 201.706 722.837 193.807 738.243 187.64C753.496 181.535 768.691 174.855 783.15 167.101C796.825 159.766 810.361 152.007 822.979 142.821C830.05 137.673 837.523 133.087 844.319 127.585C850.996 122.18 857.219 116.183 863.999 110.947C877.284 100.687 891.295 90.8643 905.32 81.5673C909.316 78.9183 913.239 76.1583 917.145 73.3783C919.498 71.7053 924.212 66.8333 927.322 67.4363C937.029 69.3143 927.306 81.8573 925.667 85.5273C930.463 82.9653 934.373 79.1803 939.363 76.8193C941.915 75.6113 948.97 71.3383 951.666 73.1383C957.997 77.3633 943.051 91.2923 940.645 94.5253C944.65 92.2403 958.137 83.1943 961.411 90.5983C964.839 98.3493 952.374 107.537 947.834 111.856C934.441 124.596 918.972 134.629 905.346 146.994C903.466 148.699 897.307 152.457 897.771 155.53C898.204 158.401 903.866 161.717 905.893 163.623C909.879 167.369 922.53 179.56 914.474 185.709C911.632 187.878 903.527 186.083 900.128 185.724C895.148 185.199 890.242 184.793 885.302 183.968C878.04 182.754 870.92 177.059 863.649 176.844C855.476 176.603 846.675 183.834 839.643 187.323C831.383 191.42 823.447 195.957 815.226 200.142C799.532 208.131 784.551 217.082 768.356 224.282C750.6 232.176 731.557 237.284 714.019 245.672C696.172 254.208 678.967 256.92 659.419 256.317C640.339 255.729 619.942 243.089 604.84 232.264C603.968 231.633 603.095 231.002 602.223 230.371C600.604 227.9 599.192 227.836 597.986 230.177C595.534 230.578 594.52 230.959 591.598 230.754C586.826 230.42 584.441 229.346 580.063 227.727C570.141 224.058 562.644 221.196 555.63 212.631C551.032 224.588 562.623 237.204 568.829 246.562C572.248 251.719 576.138 256.637 579.085 262.088C581.478 266.516 582.342 273.395 586.922 275.34C589.657 276.502 591.349 274.579 593.193 277.337C594.397 279.138 593.079 281.205 592.843 282.727C592.241 286.594 590.374 281.144 591.712 286.847C592.135 288.648 594.669 292.082 595.512 293.736C601.258 305.01 605.943 316.806 610.858 328.468C615.748 340.07 620.594 351.56 625.385 363.183C627.452 368.199 630.352 372.822 632.323 377.892C634.726 384.073 636.203 390.528 638.492 396.757C642.045 406.427 642.727 419.217 639.794 429.214C636.923 439.003 624.453 449.067 614.514 448.44C619.115 457.652 624.335 465.935 629.13 474.983C633.623 483.46 636.763 492.514 641.425 500.685C646.732 509.986 651.368 519.913 656.691 529.025C661.187 536.721 664.008 545.486 668.232 553.306C677.861 571.134 687.144 589.671 697.467 607.36C703.472 617.65 708.884 628.238 714.977 638.494C718.235 643.978 721.565 649.415 724.883 654.863C726.799 658.008 728.966 664.918 732.561 666.439C731.527 667.519 728.211 669.998 728.092 671.573C727.775 675.765 732.014 674.606 734.389 674.027C740.419 672.559 746.228 671.02 752.057 668.927C763.219 664.921 773.844 659.249 785.132 655.654C796.853 651.919 807.897 645.405 820.062 642.629C825.596 641.366 843.8 633.603 845.405 640.114C845.709 641.345 844.915 644.305 844.928 645.798C844.95 648.438 845.641 650.795 845.265 653.54C844.543 658.796 841.657 664.047 838.845 668.434C832.111 678.936 824.562 689.233 815.686 698.014C800.467 713.071 786.712 733.263 767.933 744.012C764.207 746.146 760.676 749.926 756.463 751.048C751.784 752.293 747.809 750.727 743.626 750.552C741.326 750.456 741.2 751.736 738.428 750.692C736.15 749.834 733.222 747.062 731.363 745.595C726.671 741.892 722.708 737.203 718.835 732.663C715.411 728.649 711.783 720.985 707.148 718.421C704.573 716.997 704.712 719.282 702.401 716.114C701.125 714.364 701.009 712.576 699.432 710.821C697.75 708.949 696.688 708.684 695.575 706.424C694.797 704.845 694.766 703.307 693.761 701.685C690.416 696.291 685.358 691.663 681.772 686.326C676.413 678.351 669.529 671.456 663.89 663.709C657.141 654.441 649.636 645.209 642.314 636.402C628.21 619.434 615.241 600.719 601.885 582.791C587.437 563.399 573.944 542.698 561.896 521.704C555.439 510.451 547.629 499.561 540.848 488.438C534.219 477.565 528.116 466.172 520.363 456.083C518.868 457.265 521.394 461.557 519.557 463.316C517.637 465.158 508.643 465.231 506.189 465.655C497.807 467.104 488.881 468.714 480.362 469.038C462.82 469.703 445.522 473.268 427.841 474.036C423.889 474.208 420.755 473.583 416.944 472.789C411.228 471.596 410.155 470.913 408.984 476.533C407.203 485.083 405.097 494.227 404.309 502.891C403.495 511.842 403.349 520.802 403.224 529.791C403.165 534.075 403.049 538.363 403.069 542.646C403.099 548.874 404.793 554.951 404.47 561.169C404.058 569.093 402.667 575.984 394.505 578.217C389.94 579.465 389.849 578.829 386.623 576.319C383.231 573.682 378.753 571.3 375.896 568.175C365.277 556.559 356.865 540.287 353.66 524.757C350.029 507.158 354.917 488.184 356.698 470.686C357.447 463.331 357.735 451.511 362.911 445.669C368.441 439.427 379.731 439.635 387.163 439.552C388.861 439.533 390.171 439.36 391.305 439.06C391.047 439.038 390.791 439.023 390.537 439.03L391.984 438.858C394.014 438.19 395.561 437.079 398.062 435.699C401.575 433.761 406.662 432.78 410.458 431.319C420.778 427.346 431.644 425.341 442.097 421.814C450.551 418.962 458.949 417.286 467.533 415.208C473.815 413.686 480.368 413.397 486.665 412.324C485.946 412.241 485.227 412.155 484.523 412.251C486.015 411.278 487.636 411.809 489.214 411.838C490.744 411.513 492.253 411.124 493.735 410.64C483.864 392.698 474.847 374.406 463.906 357.061C461.516 361.428 457.461 361.507 452.715 360.015C450.059 359.179 448.954 356.555 446.468 355.62C444.918 355.037 443.993 356.805 442.369 355.545C441.424 354.813 440.844 352.226 440.292 350.011C431.175 340.807 426.857 330.367 422.64 318.213C425.739 323.971 428.569 329.901 431.776 335.598C432.503 336.891 433.431 338.201 434.423 339.527L434.136 339.103C432.817 337.146 431.534 335.158 430.406 333.038C420.451 314.317 415.141 295.952 411.894 275.063C408.988 256.358 408.395 236.609 409.034 217.702L408.92 220.121C408.959 219.298 408.998 218.474 409.037 217.65L409.034 217.702C409.079 216.384 409.141 215.077 409.221 213.778C409.717 205.713 410.896 197.969 412.771 189.992C413.504 186.874 415.035 182.284 415.101 179.186C415.141 177.305 414.599 168.105 413.987 167.592C411.619 165.604 402.408 167.152 399.807 167.421C395.073 167.912 390.367 168.657 385.633 169.154C384.682 169.246 383.729 169.337 382.778 169.428C380.95 168.96 379.616 169.478 378.777 170.982C376.287 171.42 379.434 173.484 375.965 171.464C371.936 169.119 372.038 160.393 372.023 156.435C372.017 154.938 373.124 148.606 372.093 147.502C371.298 146.651 365.846 146.992 364.483 146.88C359.304 146.458 354.092 145.831 348.898 145.623C338.645 145.211 328.239 145.467 317.987 145.512C299.767 145.59 282.51 153.886 267.292 163.252C260.264 167.577 252.508 170.589 245.569 175.004C238.742 179.349 232.746 184.685 226.038 189.249C216.659 195.629 206.829 200.976 198.131 208.279C193.966 211.775 188.436 215.271 185.385 219.899C182.32 224.546 184.384 229.804 184.256 235.135C184.116 240.91 184.481 247.035 183.491 252.695C183.148 254.658 182.844 258.398 181.036 259.682C178.28 261.639 178.974 260.209 176.611 258.903C166.388 253.25 164.572 242.668 161.624 232.577C144.728 255.261 133.497 281.46 117.52 304.907C115.073 308.499 110.809 316.107 105.672 312.422C102.581 310.205 102.061 305.886 102.418 301.719L102.421 302.877C102.416 301.769 102.413 300.666 102.41 299.564C102.414 300.28 102.416 300.996 102.419 301.711C102.658 298.915 103.293 296.187 103.81 294.209C105.751 286.795 107.449 279.214 110.942 272.346C112.693 268.904 114.786 265.644 116.562 262.216C117.471 260.465 120.29 256.982 120.166 255.015C119.318 256.091 118.472 257.166 117.624 258.243C113.636 260.167 110.595 266.396 107.301 269.495C104.304 272.314 100.9 275.12 97.6643 277.811C91.7273 282.745 86.5703 288.105 81.5383 294.114C78.4843 297.761 74.6142 301.229 71.8932 294.546C69.8132 289.438 73.0752 284.853 75.4602 280.489C78.5782 274.784 81.7133 269.619 85.8543 264.612C89.3623 260.373 94.2883 255.853 95.6633 250.51C88.6723 255.359 82.4023 261.016 74.8433 265.066C68.8283 268.288 59.1132 268.112 62.8202 258.45C65.5122 251.437 73.8083 242.915 79.2883 237.807C84.9833 232.497 91.5223 227.56 97.6383 222.694C111.857 211.38 127.712 202.086 142.709 191.812C156.403 182.431 170.406 173.576 184.01 164.393C214.558 143.771 244.465 120.714 279.861 108.879C296.299 103.383 313.588 99.1003 330.633 96.1483C339.428 94.6253 348.83 92.4493 357.729 92.0563C361.009 91.9113 364.176 92.5303 367.42 92.3343C370.793 92.1313 374.962 93.0203 378.281 92.2513C381.774 91.4433 384.854 87.7113 388.326 87.9393C389.472 88.0153 390.531 89.2183 391.688 89.3323C391.688 89.3326 391.689 89.3326 391.688 89.3323C393.129 89.1783 394.541 88.0159 395.9 89.2429C395.898 89.2432 395.899 89.2429 395.9 89.2429C400.716 89.3825 405.525 89.4487 410.319 89.6891L410.106 89.7798C411.833 89.0038 413.557 89.1318 415.28 89.7908C414.201 89.7883 413.122 89.7862 412.044 89.784C415.77 90.006 419.487 90.3523 423.188 90.9393C439.239 93.4853 457.969 94.8232 473.287 101.225C473.217 101.149 473.149 101.069 473.082 100.987C474.447 100.697 475.482 101.231 476.308 102.285C476.162 102.328 476.021 102.359 475.884 102.379C477.625 103.194 479.313 104.085 480.94 105.06C483.413 99.7463 478.792 101.348 474.496 99.3643C469.75 97.1733 466.01 94.4353 462.462 90.7033C459.429 87.5133 456.833 83.5323 457.892 78.7793C458.44 76.3213 461.179 75.3443 461.666 73.5433C461.832 72.9303 460.153 70.8873 460.084 70.0073C459.916 67.9013 459.911 66.2873 460.396 64.2143C462.861 53.7013 461.797 40.2083 473.725 35.6983C476.307 34.7233 476.251 35.8083 478.169 33.7773C480.025 31.8133 480.716 28.5523 482.839 26.4333C486.897 22.3813 491.969 19.2233 497.588 17.9773C503.479 16.6703 508.469 18.6973 514.133 18.4983C520.277 18.2823 524.863 15.9193 531.286 17.5993ZM827.064 657.913C822.858 661.341 818.512 664.715 814.153 667.945C804.181 675.337 794.892 683.424 785.445 691.473C776.897 698.754 767.745 705.276 758.846 712.109C750.388 718.602 742.86 726.259 734.946 733.416C740.1 736.427 745.706 740.867 751.934 739.436C756.989 738.273 762.958 733.876 767.318 731.02C777.469 724.373 785.958 715.207 794.438 706.635C802.752 698.232 810.694 690.026 818.543 681.308C827.367 671.506 833.608 662.164 839.515 650.419C835.017 647.434 830.08 655.456 827.064 657.913ZM751.628 681.579C745.698 683.501 739.552 684.343 733.641 686.161C728.498 687.743 724.093 692.732 720.852 696.876C718.724 699.597 717.329 702.799 715.425 705.73C714.348 707.389 710.234 711.291 710.285 712.912C710.351 715.005 716.4 720.254 717.824 721.862C720.461 724.84 723.173 727.751 725.933 730.615C729.988 722.088 739.688 714.93 746.929 709.082C754.44 703.013 762.32 697.006 770.099 690.997C787.275 677.725 803.445 664.626 821.995 653.143C820.879 650.463 758.525 679.342 751.628 681.579ZM722.92 676.576C717.259 683.604 708.662 691.54 706.822 700.753C710.39 696.638 713.544 692.115 716.996 687.896C718.498 686.062 720.061 684.427 721.748 682.761C724.838 679.707 725.819 679.981 722.92 676.576ZM577.075 287.312C565.757 288.16 554.318 290.152 543.167 292.602L542.653 292.602C543.471 292.602 544.277 292.604 545.084 292.606C544.442 292.606 543.8 292.606 543.162 292.604C540.47 293.195 537.793 293.814 535.139 294.449C508.994 300.71 483.011 313.177 464.134 332.584L463.5 333.24C462.62 334.637 460.571 336.59 460.979 338.47C459.7 337.667 459.296 336.974 459.423 336.348C459.244 336.608 459.086 336.889 458.95 337.195C464.3 340.557 467.718 348.278 471.251 353.49C475.235 359.366 479.696 364.89 483.511 370.891C491.802 383.936 499.753 397.409 507.204 410.955C520.099 434.399 535.977 456.651 550.16 479.339C564.319 501.991 577.829 524.314 591.983 546.935C607.051 571.015 624.336 593.703 639.901 617.178C649.182 631.175 659.782 644.305 669.29 658.17C678.287 671.292 687.157 684.414 696.322 697.418C701.156 683.842 710.58 672.184 723.602 665.316C705.869 640.147 688.899 614.642 673.288 588.075C659.839 565.187 647.978 542.226 635.489 519.059C623.186 496.236 611.046 473.391 598.612 450.586C592.402 439.196 587.172 427.229 581.844 415.329C576.176 402.668 573.794 388.568 567.657 376.145C564.789 370.337 560.902 363.633 561.284 356.904C561.644 350.558 566.053 344.081 569.443 338.967C571.457 335.932 575.315 327.494 579.457 327.453C586.932 327.379 578.075 342.645 576.905 345.649C571.517 359.487 579.017 371.452 584.657 383.848C590.164 395.954 594.543 408.656 600.403 420.619C602.863 425.641 605.361 430.543 607.6 435.638C608.374 437.397 610.498 443.177 612.465 443.749C613.59 444.076 619.17 440.465 620.03 439.916C624.397 437.131 630.349 432.29 632.97 427.78C635.564 423.316 634.512 415.697 633.322 410.923C629.868 397.056 622.595 383.866 616.878 370.858C610.877 357.203 604.58 343.373 599.408 329.38C596.613 321.82 594.097 314.192 591.041 306.725C589.305 302.48 587.488 298.269 585.557 294.109C583.104 288.822 582.918 286.874 577.075 287.312ZM376.544 452.347C371.096 454.981 369.652 456.374 368.541 462.284C367.387 468.426 367.898 474.487 367.264 480.661L367.26 480.703L367.181 481.788C367.207 481.43 367.233 481.072 367.259 480.713L367.264 480.661C366.276 490.257 365.058 499.851 364.471 509.335C363.702 521.735 368.246 533.309 373.634 544.127C376.005 548.889 378.422 553.516 382.019 557.504C384.228 559.953 386.788 562.031 389.324 564.122C392.533 566.765 393.022 568.397 395.116 564.815C397.689 560.411 395.637 553.264 394.907 548.513C393.757 541.022 393.16 533.874 393.254 526.265C393.543 522.834 393.748 519.397 393.941 515.96C393.938 515.681 393.937 515.403 393.935 515.126L393.941 515.953C394.414 507.555 394.816 499.153 396.196 490.82C396.693 487.824 397.293 484.841 398.037 481.897C398.715 479.21 401.471 474.335 401.25 471.699C401.027 469.04 396.888 464.078 396.107 459.658C395.66 457.124 395.655 454.438 395.514 451.877C395.308 448.166 396.196 447.267 392.984 446.234C389.145 444.999 379.838 450.754 376.544 452.347ZM320.287 423.29C318.828 427.72 312.895 432.13 309.829 435.431C301.458 444.446 294.976 453.607 288.406 463.926C277.864 480.48 268.256 499.77 263.856 519.144C252.632 522.246 256.538 499.153 258.079 494.684C261.861 483.717 266.27 472.938 272.008 462.852C277.271 453.602 284.458 443.58 291.809 435.872C294.847 432.686 298.427 428.801 301.739 425.836C304.659 423.221 311.216 416.859 314.874 416.257C319.145 415.554 321.769 418.79 320.287 423.29ZM721.239 355.624C727.788 367.772 730.982 382.776 733.341 396.288C735.479 408.53 737.173 421.902 736.85 434.332C737.169 436.466 737.297 438.61 737.325 440.76L737.278 442.709C737.315 441.125 737.353 439.541 737.391 437.96C738.036 439.53 738.115 441.084 737.328 442.615C737.294 445.748 737.104 448.888 737.037 452.022C736.939 456.554 737.902 465.812 734.811 469.71C730.098 475.655 728.69 464.996 728.397 462.082C727.665 454.79 727.56 447.411 726.983 440.103C724.96 414.489 721.65 386.183 711.799 362.323C710.864 360.059 709.393 355.209 707.597 353.605C706.325 352.47 705.348 353.715 703.883 351.731C702.355 349.663 700.191 337.621 702.827 335.287C708.352 330.393 718.972 351.419 721.239 355.624ZM272.7 415.297C280.54 420.763 251.764 434.097 247.906 436.546C241.009 440.924 234.135 445.171 227.394 449.8C220.313 454.662 213.612 460.486 206.332 464.921C197.208 454.179 222.899 438.538 230.353 434.531C237.925 430.46 245.132 425.826 252.999 422.374C256.76 420.724 268.725 412.525 272.7 415.297ZM495.823 419.247C494.279 419.487 491.295 421.353 489.801 421.878C475.091 427.055 458.12 429.507 444.564 436.853C435.41 436.943 425.754 442.41 416.977 444.933C413.491 445.935 406.51 446.928 403.58 448.922C400.297 451.157 401.864 460.384 401.864 464.46C407.575 459.108 414.274 460.204 421.831 459.882C432.46 459.43 443.02 458.381 453.592 457.773C464.804 457.128 475.761 455.388 487.027 455.432C498.122 455.476 508.978 453.159 519.902 455.295C517.997 447.813 511.143 439.801 506.976 433.401C504.41 429.46 502.524 424.442 499.607 420.789C497.391 418.013 498.952 418.758 495.823 419.247ZM421.201 459.868L417.422 459.93C418.666 458.92 419.93 459.156 421.201 459.868ZM756.019 369.099C761.419 384.495 766.407 399.52 766.739 416.024C766.853 421.743 767.013 430.765 764.591 436.033C760.561 444.799 756.933 437.043 757.095 431.025C755.77 415.895 753.965 400.668 750.698 385.815C749.179 378.907 745.824 370.178 747.035 363.018C748.819 352.49 754.818 365.675 756.019 369.099ZM757.095 431.025C757.055 432.504 757.015 433.984 756.973 435.458C757.012 433.976 757.053 432.501 757.095 431.025ZM790.849 397.979C792.605 402.589 795.614 413.572 792.712 418.105C788.839 424.154 785.941 417.375 784.808 413.031C783.026 406.192 783.155 399.085 780.576 392.468C784.511 384.089 788.628 392.144 790.849 397.979ZM239.02 391.545C239.02 396.382 231.641 397.864 227.653 399.866C224.716 401.34 221.273 405.645 219.395 402.212C216.24 396.441 235.14 391.545 239.02 391.545ZM392.989 97.4313C396.358 107.438 398.811 118.917 397.39 129.533C396.659 134.989 394.636 140.328 392.808 145.498C391.68 148.69 386.926 156.326 388.2 159.791C393.448 158.701 402.074 160.52 406.323 157.598C411.154 154.276 410.715 147.337 418.331 146.873C430.018 146.161 439.432 156.537 440.248 168.16C440.67 174.176 436.241 180.536 431.741 184.089C429.315 186.005 427.012 186.612 424.346 187.813C422.576 188.611 422.056 188.576 421.939 188.535L421.935 188.532L421.942 188.54C422.017 188.642 422.146 189.111 421.372 190.88C420.411 193.079 420.686 196.564 420.402 198.914C419.986 202.359 418.604 206.661 419.058 210.055C419.546 213.711 419.387 214.099 423.348 212.796C427.9 211.299 433.739 205.003 437.158 201.613C440.511 198.288 443.831 191.158 448.649 196.864C452.344 201.24 452.336 212.223 451.771 217.649C450.46 230.258 436.098 240.535 426.049 246.524C418.964 250.746 419.98 253.512 420.426 261.481C420.787 267.946 421.803 274.462 422.662 280.875C423.701 288.624 426.189 288.743 429.992 282.996C432.902 278.598 437.666 271.392 443.919 273.915C450.125 276.419 449.592 284.47 450.981 289.734C452.926 297.101 452.301 302.645 446.035 308.029C443.19 310.474 434.021 314.453 433.241 318.417C432.862 320.344 437.309 326.373 438.37 328.433C440.586 332.737 442.908 336.984 445.791 340.887C446.766 334.331 452.503 328.774 456.091 323.547C460.424 317.235 465.722 312.793 471.937 308.215C474.214 306.54 479.955 304.289 477.266 301.38C474.932 298.853 472.502 300.72 470.189 296.669C466.313 289.881 465.758 278.948 465.453 271.3C465.182 264.469 464.933 254.886 468.992 248.962C473.933 241.75 478.882 241.475 486.288 244.548C492.068 246.947 495.099 256.275 498.19 261.842C503.418 271.254 503.522 279.249 503.522 289.662C509.118 286.502 515.256 285.286 521.29 283.414C525.455 282.121 532.801 281.283 535.985 278.167C532.568 276.284 530.744 272.192 531.454 268.33C532.618 262.001 535.867 264.755 540.686 263.918C542.846 263.543 544.409 261.912 546.582 261.6C548.807 261.282 551.198 262.168 553.41 262.51C558.861 263.353 564.171 264.638 569.584 265.539C566.569 261.518 563.527 256.045 558.676 254.529C552.83 252.701 545.799 252.406 539.692 250.88C531.817 248.913 518.241 236.422 529.773 228.708C534.131 225.792 539.859 229.489 543.986 225.58C547.898 221.874 546.743 214.171 547.792 209.18C550.211 197.678 557.081 187.284 568.261 182.846C572.095 186.938 561.18 197.032 559.699 201.196C558.817 203.677 558.142 203.403 559.052 205.462C559.683 206.894 562.778 208.513 564.117 209.608L565.238 210.524C568.231 212.962 571.278 215.336 574.796 216.992C574.39 211.854 574.586 205.312 580.32 203.06C585.246 201.124 591.56 206.208 593.194 210.746C594.862 208.331 597.977 203.666 597.978 200.597C599.558 198.314 598.902 197.144 596.008 197.087C594.785 196.579 593.539 196.139 592.27 195.766C586.885 193.651 582.792 191.284 581.057 185.33C579.761 180.883 579.474 176.217 577.952 171.823C578.742 169.539 577.932 168.109 575.522 167.533C574.77 166.992 574.019 166.452 573.267 165.911C570.778 164.081 568.214 162.159 565.898 160.113C564.075 158.501 562.375 155.159 560.537 153.92C560.125 153.059 559.565 152.302 558.859 151.651C557.23 152.653 555.596 153.645 553.955 154.628C548.273 158.1 542.854 161.183 535.963 160.642C530.583 160.219 522.611 158.378 517.594 156.376C512.114 154.189 508.345 147.967 504.964 143.431C495.726 150.322 488.058 146.627 484.641 135.935C483.116 131.165 482.26 126.109 481.827 121.128C481.474 117.057 482.687 113.452 479.568 111.234C475.674 108.464 467.123 108.306 462.526 107.568C457.484 106.758 451.538 105.311 446.407 106.08C448.657 114.536 452.01 124.279 445.641 131.118C439.349 137.876 436.182 141.328 427.979 134.004C421.705 128.401 416.534 120.748 411.951 113.723C409.548 110.039 408.479 105.236 406.049 101.745C403.252 97.7273 397.693 98.1523 392.989 97.4313ZM385.06 99.1459C382.979 99.1053 378.045 100.031 375.982 100.443C370.372 101.565 364.797 102.477 358.92 103.415C345.744 105.516 332.633 108.238 319.518 110.591C307.485 112.75 294.134 115.698 282.695 120.278C270.193 125.283 258.057 130.15 246.153 136.498C234.216 142.863 223.966 151.158 212.555 158.181C191.164 171.345 169.515 184.883 148.535 198.861C135.192 207.75 120.956 215.446 108.016 224.835C101.349 229.672 94.8593 234.727 88.5083 239.97C83.8343 243.827 75.3513 249.142 74.1083 255.586C80.3723 255.586 88.8473 244.639 93.9543 241.213C97.6733 238.718 101.836 236.702 105.701 234.43C107.919 233.126 115.007 226.335 117.419 226.3C120.898 226.249 121.407 231.22 120.54 233.467C119.416 236.379 116.103 238.77 113.902 240.856C106.727 247.657 100.776 256.607 96.0052 265.253C104.781 262.025 112.059 251.431 118.299 244.643C121.597 241.055 138.449 225.583 137.251 240.24C136.808 245.663 132.895 249.808 130.167 254.293C127.217 259.144 124.179 264.065 121.584 269.111C116.313 279.357 112.33 289.897 109.183 301.003C114.641 298.853 116.068 292.84 118.615 288.134C121.208 283.343 124.241 278.713 127.153 274.113C133.332 264.351 138.7 254.084 145.261 244.557C147.852 240.792 159.429 220.9 164.081 223.705C167.214 225.593 168.141 234.478 169.081 237.597C170.569 242.531 172.861 247.701 177.818 249.936C178.045 239.858 177.699 229.793 177.86 219.741C177.988 211.83 182.268 209.572 187.668 204.05C200.189 191.245 216.199 182.985 231.06 173.327C237.674 169.029 243.797 163.436 251.102 159.857C259.317 155.833 267.298 151.19 275.32 146.682C292.411 137.08 311.617 133.531 331.067 135.45L331.099 135.454C329.554 135.301 328.01 135.148 326.465 134.995C328 135.147 329.534 135.298 331.067 135.45C331.077 135.45 331.088 135.453 331.099 135.454C349.543 132.869 370.224 136.442 387.202 143.608C390.921 130.787 392.307 117.294 389.37 104.135C388.509 100.275 388.656 99.2203 385.06 99.1459ZM552.25 291.221C551.467 291.263 550.685 291.304 549.892 291.346C550.671 291.304 551.46 291.263 552.25 291.221ZM921.888 78.3333C916.525 83.1893 909.507 87.2173 903.584 91.2653C898.145 94.9823 893.084 99.2123 887.712 102.927C873.756 112.579 861.005 123.993 847.482 134.353C822.084 153.811 795.615 171.37 766.555 184.936C752.853 191.332 738.755 196.9 724.678 202.379C710.959 207.718 698.028 215.025 682.867 215.079C675.093 215.106 666.888 215.316 659.165 214.144C650.838 212.879 642.153 207.893 634.563 204.386C630.995 202.737 627.353 201.165 623.921 199.247C620.766 197.484 616.51 192.973 613.175 192.39C605.641 191.073 604.87 206.545 602.922 211.948C602.26 213.785 600.018 216.987 599.993 218.791C599.944 222.18 599.426 220.449 602.452 222.641C605.736 225.02 610.283 226.955 613.93 228.828C620.829 232.37 628.19 235.529 635.298 238.473C642.912 241.627 650.271 243.708 658.512 244.601C662.07 244.987 665.427 245.09 668.793 245.115L668.642 245.18C670.141 244.523 671.642 244.036 673.169 245.103L672.037 245.122C674.501 245.12 677.005 245.111 679.627 245.174C678.317 245.142 677.009 245.111 675.7 245.079C677.025 244.45 678.339 244.318 679.628 245.174C698.888 243.053 715.797 231.98 733.884 226.078C752.318 220.062 771.457 211.416 788.968 202.346C805.59 193.735 822.249 184.954 839.328 177.062C849.126 172.534 859.543 163.156 870.75 166.7C875.918 168.334 880.534 171.524 885.891 172.632C892.055 173.906 898.034 174.124 904.133 175.954C903.751 173.119 895.712 168.863 893.851 165.921C892.61 163.958 892.434 161.728 891.403 159.791C890.461 158.02 889.004 157.87 888.637 155.782C887.222 147.741 900.451 139.314 905.455 134.83C921.409 120.528 940.162 109.108 956.057 94.4123C946.481 94.4123 934.916 106.648 927.748 112.235C922.928 115.993 918.153 119.757 913.073 123.159C911.681 124.091 905.224 129.036 903.451 128.482C898.478 126.93 903.215 118.253 905.016 116.311C908.54 112.508 913.29 109.451 917.338 106.238C925.858 99.4743 933.641 92.2613 940.865 83.9593C933.737 84.3863 923.914 96.1703 918.873 100.848C913.364 105.96 906.073 112.895 898.912 115.577C895.214 116.962 893.379 116.583 893.102 112.097C892.787 106.982 896.769 104.288 900.211 101.258C907.073 95.2163 918.075 86.7703 921.888 78.3333ZM515.146 209.978C516.099 218.405 509.884 228.833 500.564 229.181C490.578 229.552 489.999 217.835 490.356 210.721C490.547 206.901 490.08 204.649 492.715 202.009C493.808 200.915 496.459 200.446 497.757 199.391C499.428 198.032 500.553 196.053 502.195 194.638C510.655 187.345 516.154 203.219 515.146 209.978ZM477.511 151.767C480.735 153.772 484.253 158.915 485.796 162.234C488.535 168.123 490.689 173.756 492.056 180.088C490.552 186.894 483.984 204.753 473.517 200.52C462.653 196.127 462.379 182.332 462.331 173.008C462.297 166.218 466.042 144.634 477.511 151.767ZM548.706 183.103C548.866 189.296 540.866 196.049 535.956 198.668C527.963 202.932 526.349 192.245 526.882 186.464C527.477 180.003 530.073 176.427 536.022 173.679C544.856 169.598 546.863 175.609 548.706 183.103ZM421.925 188.523C421.908 188.509 421.902 188.518 421.926 188.53L421.935 188.532L421.925 188.523ZM531.078 84.2823C528.113 85.2223 523.647 90.9173 521.381 93.1933C519.979 94.6003 517.575 98.9163 515.576 99.1653C512.603 99.5363 512.875 98.1323 510.854 95.7123C503.241 86.5913 495.189 86.6243 490.817 97.6933C493.365 98.9563 496.062 99.1873 498.85 99.0903C499.796 99.0583 503.433 97.9713 504.133 98.4343C508.092 101.057 502.293 103.324 501.497 104.668C500.893 105.688 500.599 106.595 500.362 107.408C500.398 108.135 500.432 108.864 500.465 109.596C500.415 108.566 500.367 107.529 500.319 106.493L500.361 107.414C499.786 109.392 499.555 110.811 496.038 111.934C492.592 113.035 489.699 112.072 486.272 110.994C486.707 117.742 486.689 129.765 491.414 135.306L491.676 135.601C493.009 136.211 494.342 136.82 495.675 137.43C495.493 137.444 495.313 137.453 495.136 137.456C497.427 137.5 500.156 136.476 501.783 136.129C501.078 132.778 497.248 121.411 498.979 118.982C502.255 114.389 503.69 121.234 504.506 124.33C506.426 131.618 510.61 141.192 517.195 145.771C517.129 145.669 517.068 145.557 517.013 145.436C518.582 145.714 520.263 145.783 521.044 147.561C520.575 147.366 520.059 147.258 519.55 147.136L519.552 147.137C525.806 150.063 537.516 154.928 543.779 151.658C552.443 147.134 559.431 139.641 566.744 133.361C561.704 130.871 561.016 127.009 564.932 122.963C573.238 131.866 578.319 112.763 580.989 106.935C575.878 106.484 571.295 109.559 566.067 108.512C561.809 107.659 556.673 106.16 553.023 103.765C548.147 100.564 543.873 95.9433 539.684 91.9413C537.176 89.5453 533.771 83.4273 531.078 84.2823ZM377.671 148.041C377.908 149.014 378.14 149.964 378.37 150.916C379.765 148.28 379.765 148.28 377.671 148.041ZM538.454 146.449C536.383 146.221 528.172 144.753 533.457 142.386C536.155 141.177 538.709 143.97 538.454 146.449ZM563.14 116.858C564.289 119.561 559.707 124.404 558.421 126.727C556.406 130.368 552.894 145.592 547.209 144.05C540.958 144.034 541.993 138.08 545.429 135.181C546.627 134.17 547.939 134.122 549.127 132.833C550.159 131.713 550.799 129.468 551.486 128.097C553.17 124.74 554.691 120.849 557.356 118.143C559.498 115.969 561.756 113.606 563.14 116.858ZM532.924 113.227C535.958 113.581 533.979 115.03 535.536 116.321C536.578 117.184 536.739 117.611 536.652 117.807L536.639 117.829L536.716 117.824C537.129 117.801 537.886 117.815 539.202 117.939C542.089 118.209 550.969 115.62 545.326 121.33C544.098 122.573 536.71 126.046 535.065 125.253C531.396 123.486 532.953 116.291 532.924 113.227ZM536.639 117.829C535.902 117.887 536.482 118.077 536.637 117.834L536.639 117.829ZM294.407 117.016C293.619 117.038 292.83 117.06 292.032 117.081C292.817 117.058 293.612 117.037 294.407 117.016ZM416.737 89.9545C417.99 90.1195 419.242 90.2835 420.493 90.4485C419.24 90.2835 417.988 90.1195 416.737 89.9545Z"
        fill={theme.palette.text.primary}
      />
    </svg>
  );
}