


import { Alert, Box, Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";
import Otp from "./OtpModal";

function PayModal({isOpen,setIsOpen}) {
    const [Open,setOpen]=useState(false)
    const onClose = () => {
        setIsOpen(false);
      };
      const handleData=()=>{
        let cardnumber=document.getElementById("cardnumber").value
        let month=document.getElementById("month").value
        let year=document.getElementById("year").value
        let first=document.getElementById("first").value
        let last=document.getElementById("last").value
          if(cardnumber!==""&&month!==""&&year!==""&&first!==""&&last!==""){
            setOpen(true)
          }
          else{
            alert('Fill the Details');
          }
      }
    return (
      <>
        <Modal style={{padding:"10px"}} isOpen={isOpen} size="xl" onClose={onClose}>
          <ModalOverlay />
          <ModalContent>

          
            <ModalHeader textAlign="center">CheckOut</ModalHeader>

            <ModalHeader > Delivery Address</ModalHeader>

            <ModalBody>
            <Stack spacing='24px'>



            <Box>
                <Input
                  id="Email"
                  type="text"  maxlength="19" 
                  placeholder='Email'
                />
              </Box>

            <Box display="flex" gap="20px">
              <Input id="first" w="250PX" placeholder="First Name"/>
              <Input id="last"  w="250PX" placeholder="Last Name"/>  
              </Box>

              <Box>
                <Input
                  id="cardnumber"
                  type="tel"  maxlength="19" 
                  placeholder='Address*'
                />
              </Box>
              <Box display="flex" gap="10px">
              <Input  w="120PX" placeholder="City"/>
                <Input  type="number" id="pincode" w="100PX" placeholder="Pincode"/>
                <Input  type="number" id="mobilenumber" w="200PX" placeholder="Mobile Number"/>
                
              </Box>

   
             
            </Stack>
            </ModalBody>


            <ModalHeader >Payment Method</ModalHeader>
        
            <ModalCloseButton />
            <ModalBody>
            <Stack spacing='24px'>
              <Box>
                <Input
                  id="cardnumber"
                  type="tel"  maxlength="19" 
                  placeholder='Card Number*'
                />
              </Box>
              <Box display="flex" gap="10px">

                <Input id="month" w="100PX" placeholder="MM*"/>
                <Input id="year" w="100PX" placeholder="YY*"/>
                <Input type="number" w="120PX" placeholder="CVV/CVC*"/>
              </Box>

              <Box display="flex" gap="20px">
              <Input id="first" w="250PX" placeholder="First Name"/>
              <Input id="last"  w="250PX" placeholder="Last Name"/>  
              </Box>
              <button onClick={()=>handleData()} style={{display:"block",marginLeft:"150px" ,backgroundColor:"black",color:"white",width:"40%",borderRadius:"1.4rem",padding:"5px"}}>Place Order</button>
            </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Otp Open={Open} setOpen={setOpen}/>
      </>
    )
  }
  export default PayModal
