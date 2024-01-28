
import pictures from '@pictures/index'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='FooterBIG'>
      <footer>
        <div className="footerAbove">

          <div className="footerAbove__left">
            <div className="footer-title">
              CHI NHÁNH
            </div>
            <p>Chính nhánh TP Hồ Chí Minh</p>
          </div>

          <div className="footerAbove__mid">
            <div className="footer-title">
              GIỚI THIỆU
            </div>
            <p>Shop ở TP.HCM chuyên cung cấp sỉ lẻ và nhận ship hàng toàn quốc đến tận tay khách hàng bằng nhiều hình thức nhanh chóng - tiện lợi - đảm bảo chất lượng và uy tín.</p>
            <p>Khách đặt mua lẻ từ 5 gói trở lên.</p>
            <p>
              Đặc biệt :
              <br />
              Nhận hàng rồi mới thanh toán .
              <br />
              Free ship khi mua từ 3 cây .
            </p>
          </div>

          <div className="footerAbove__right">
            <div className="footer-title">
              THEO DÕI CHÚNG TÔI
            </div>

            <div className="footerAbove__right-image">
              <a href="">
                <img src={pictures.footerBig} alt="" />
              </a>
            </div>
           <p>
           Chúng tôi sẽ gửi thông tin sản phẩm mới và khuyến mãi qua Email của quý khách, chúng tôi cam kết không Spam Mail và không bán/chia sẻ thông tin của khách hàng.
           </p>
            <div className="footerAbove__right-input">

              <input type="text" placeholder='Địa chỉ Email' />
              <button className='input-register'>Đăng Ký</button>
            </div>
          </div>


        </div>
        
        <div className="footerBelow">

        </div>
      </footer>
    </div>
  )
}

export default Footer