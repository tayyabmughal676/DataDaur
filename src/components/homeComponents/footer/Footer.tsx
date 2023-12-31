import smsIcon from "@/../public/Icons/sms.svg";
import phoneIcon from "@/../public/Icons/phone_icon.svg";
import Image from "next/image";
import Link from "next/link";
export default function HomeFooter() {
  return (
    <div className="px-[20px] md:px-[30px] lg:px-[30px] pt-[20px] md:pt-[60px] lg:pt-[60px] mb-[10px] lg:mb-[20px] md:mb-[20px]">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mb-[20px]">
        <div className="flex justify-start flex-col gap-[5px] md:gap-[20px] lg:gap-[20px] w-full md:w-[25%] lg:w-[15%] text-[#F2F2F2] lg:pr-[15px]">
          <Image
            src="/DataDaur.svg"
            alt="datadaur"
            width={132}
            height={40}
            className="mb-[5px] mb:mb-[0px] lg:mb-[0px]"
          />
          <div className="flex flex-col md:flex-col lg:flex-row gap-2 md:gap-8 lg:gap-[50px]">
            <div className="flex flex-col gap-[5px]">
              <div className="text-[12px] md:text-[14px] lg:text-[14px] font-normal">
                East Rd. CB1, Cambridge, United Kingdom
              </div>
              <Link href={"mailto:${business@datadaur.com}"}>
                <div className="flex items-center">
                  <Image
                    src={smsIcon}
                    alt="sms"
                    width={24}
                    height={24}
                    className="w-[14px] h-[14px] md:w-[24px] lg:w-[24px] md:h-[24px] lg:h-[24px]"
                  ></Image>
                  <span className="ml-[2px] md:ml-[5px] lg:ml-[5px] text-[12px] md:text-[17px] lg:text-[17px]">
                    Business@datadaur.com
                  </span>
                </div>
              </Link>
              <Link
                href={
                  "//api.whatsapp.com/send?phone=971552025311&text=Hi DataDaur"
                }
                target="_blank"
              >
                <div className="flex items-center">
                  <Image
                    src={phoneIcon}
                    alt="sms"
                    width={24}
                    height={24}
                    className="w-[14px] h-[14px] md:w-[24px] lg:w-[24px] md:h-[24px] lg:h-[24px]"
                  ></Image>
                  <span className="ml-[2px] md:ml-[5px] lg:ml-[5px] text-[12px] md:text-[17px] lg:text-[17px]">
                    +97 (155) 202-5311
                  </span>
                </div>
              </Link>
            </div>
            <div>
              <div
                className="hidden md:flex lg:flex w-[2px] h-[110px] "
                style={{
                  background:
                    "linear-gradient(89deg, #3F1B79 0.92%, #11074F 98.29%)",
                }}
              ></div>
            </div>
            <div className="flex flex-col gap-[5px]">
              <div className="text-[12px] md:text-[14px] lg:text-[14px] font-normal">
                East Rd. CB1, Cambridge, United Kingdom
              </div>
              <Link href={"mailto:${business@datadaur.com}"}>
                <div className="flex items-center">
                  <Image
                    src={smsIcon}
                    alt="sms"
                    width={24}
                    height={24}
                    className="w-[14px] h-[14px] md:w-[24px] lg:w-[24px] md:h-[24px] lg:h-[24px]"
                  ></Image>
                  <span className="ml-[2px] md:ml-[5px] lg:ml-[5px] text-[12px] md:text-[17px] lg:text-[17px]">
                    Business@datadaur.com
                  </span>
                </div>
              </Link>
              <Link
                href={
                  "//api.whatsapp.com/send?phone=971552025311&text=Hi DataDaur"
                }
                target="_blank"
              >
                <div className="flex items-center">
                  <Image
                    src={phoneIcon}
                    alt="sms"
                    width={24}
                    height={24}
                    className="w-[14px] h-[14px] md:w-[24px] lg:w-[24px] md:h-[24px] lg:h-[24px]"
                  ></Image>
                  <span className="ml-[2px] md:ml-[5px] lg:ml-[5px] text-[12px] md:text-[17px] lg:text-[17px]">
                    +97 (155) 202-5311
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between text-[12px] md:text-[14px] lg:text-[14px] md:gap-[10px] lg:gap-[10px] mb-[10px] md:mb-[30px] lg:mb-[30px] text-white">
            <Link href={"/terms&conditions px-[10px]"}>
              <div>Terms & Conditions</div>
            </Link>
            <Link href={"/privacy-policy px-[10px]"}>
              <div>Privacy Policy</div>
            </Link>
            <Link href={"/affiliate-program px-[10px]"}>
              <div>Affiliate Program</div>
            </Link>
          </div>
          <div className="flex flex-row justify-between md:justify-end lg:justify-end gap-5">
            <div className="w-[16px] md:w-[24px] lg:w-[24px] h-[16px] md:h-[24px] lg:h-[24px]">
              <Link href={"/"} target="_blank" aria-label="threads">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.7048 11.108C16.5428 8.121 14.9108 6.411 12.1708 6.394C10.5188 6.384 9.13785 7.084 8.29185 8.367L9.79985 9.4C10.4339 8.439 11.4348 8.24 12.1599 8.247C13.0628 8.253 13.7429 8.515 14.1839 9.027C14.5038 9.399 14.7189 9.914 14.8259 10.563C14.0259 10.427 13.1599 10.385 12.2359 10.438C9.62985 10.588 7.95585 12.108 8.06785 14.219C8.12485 15.29 8.65785 16.212 9.56985 16.814C10.3398 17.323 11.3338 17.571 12.3649 17.515C13.7278 17.44 14.7969 16.92 15.5428 15.97C16.1088 15.248 16.4668 14.312 16.6248 13.134C17.2748 13.526 17.7548 14.041 18.0218 14.661C18.4738 15.715 18.4998 17.447 17.0868 18.859C15.8488 20.095 14.3609 20.631 12.1119 20.647C9.61685 20.629 7.72985 19.828 6.50385 18.269C5.35385 16.809 4.76085 14.699 4.73885 12C4.76085 9.3 5.35485 7.191 6.50385 5.73C7.72985 4.171 9.61685 3.371 12.1119 3.353C14.6249 3.372 16.5438 4.175 17.8179 5.743C18.4429 6.511 18.9129 7.477 19.2239 8.603L20.9898 8.133C20.6128 6.746 20.0208 5.551 19.2158 4.56C17.5828 2.55 15.1828 1.521 12.1059 1.5C9.03485 1.521 6.67285 2.555 5.08685 4.571C3.67585 6.366 2.94685 8.877 2.92285 12.007C2.94685 15.137 3.67585 17.634 5.08685 19.429C6.67385 21.445 9.04685 22.479 12.1168 22.5C14.8478 22.481 16.7718 21.766 18.3568 20.183C20.4319 18.11 20.3689 15.513 19.6859 13.919C19.1609 12.694 18.1158 11.713 16.7058 11.109L16.7048 11.108ZM12.2669 15.665C11.1249 15.729 9.93885 15.217 9.87985 14.119C9.83685 13.305 10.4599 12.397 12.3369 12.289C13.1852 12.232 14.0373 12.2906 14.8699 12.463C14.6538 15.165 13.3849 15.603 12.2669 15.665Z"
                    fill="#CACACA"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-[16px] md:w-[24px] lg:w-[24px] h-[16px] md:h-[24px] lg:h-[24px]">
              <Link href={"/"} target="_blank" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="#CACACA"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-[16px] md:w-[24px] lg:w-[24px] h-[16px] md:h-[24px] lg:h-[24px]">
              <Link
                href={"https://twitter.com/DataDaur"}
                target="_blank"
                aria-label="twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.3259 2H21.6993L14.3293 10.4728L23 22H16.2112L10.8945 15.0079L4.80967 22H1.4345L9.31783 12.9372L1 2.00092H7.96117L12.7673 8.39192L18.3259 2ZM17.1425 19.9699H19.0116L6.9455 3.92412H4.93983L17.1425 19.9699Z"
                    fill="#CACACA"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-[16px] md:w-[24px] lg:w-[24px] h-[16px] md:h-[24px] lg:h-[24px]">
              <Link href={"/"} target="_blank" aria-label="facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                    fill="#CACACA"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-[16px] md:w-[24px] lg:w-[24px] h-[16px] md:h-[24px] lg:h-[24px]">
              <Link
                href={"https://www.linkedin.com/company/datadaur/"}
                target="_blank"
                aria-label="Linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.93994 5.00002C6.93968 5.53046 6.72871 6.03906 6.35345 6.41394C5.97819 6.78883 5.46937 6.99929 4.93894 6.99902C4.40851 6.99876 3.89991 6.78779 3.52502 6.41253C3.15014 6.03727 2.93968 5.52846 2.93994 4.99802C2.94021 4.46759 3.15117 3.95899 3.52644 3.5841C3.9017 3.20922 4.41051 2.99876 4.94094 2.99902C5.47137 2.99929 5.97998 3.21026 6.35486 3.58552C6.72975 3.96078 6.94021 4.46959 6.93994 5.00002ZM6.99994 8.48002H2.99994V21H6.99994V8.48002ZM13.3199 8.48002H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.90002 14.9399 7.13002 13.2799 10.16L13.3199 8.48002Z"
                    fill="#CACACA"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[12px] md:text-[12px] lg:text-[12px] text-white">
        @ Datadaur 2023. All rights reserved.
      </div>
    </div>
  );
}
