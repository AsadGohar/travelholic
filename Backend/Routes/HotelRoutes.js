const express = require ('express');
const router = express.Router();

const {createHotelInfo, getHotelInfo , ,updateHotelInfo,deleteHotelInfoById} = require('../Controllers/HotelControllers')

router.post('/post-hotel', async (req,res)=>{
  const {user,text, reported} = req.body
  const hotel = await createHotelInfo(user,text,reported);
  res.send(hotel)
})

router.get('/get-hotels', async (req,res)=>{
  const hotels = await getHotelInfo()
  res.send(hotels)
})

router.delete('/delete/:id', async (req,res)=>{
  const hotel = await deleteHotelInfoById(req.params.id);
  res.send(hotel)
})



router.put('/update-hotel', async (req,res)=>{
  const {id,text} =req.body
  const updatedHotelInfo = await updateHotelInfo(id,text)
  res.send(updatedHotelInfo)
})

module.exports = router;
