import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';





function Popupp(){
  const MySwal = withReactContent(Swal);
      MySwal.fire({
          text:'this website will help you to find any service you want on various fields whith just one click ! ',
          imageUrl: '../img/tip.gif',
          imageWidth: 400,
          imageHeight: 268,
          backdrop:true,
          confirmButtonText: 'continue',
          confirmButtonColor:'#0b1923'
        })
return []
}


export default Popupp;