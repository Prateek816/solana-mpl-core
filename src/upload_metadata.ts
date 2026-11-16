import { irysUploader } from '@metaplex-foundation/umi-uploader-irys'
// Configure an uploader (Irys, AWS, etc.)
umi.use(irysUploader())
// Upload image first
const [imageUri] = await umi.uploader.upload([imageFile])
// Upload metadata JSON
const uri = await umi.uploader.uploadJson({
  name: 'My NFT',
  description: 'This is my NFT',
  image: imageUri,
  attributes: [
    { trait_type: 'Background', value: 'Blue' },
  ],
})