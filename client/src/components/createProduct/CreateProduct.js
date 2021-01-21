import React , {useState , useEffect} from 'react'
import {useDispatch , useSelector} from "react-redux"
import {addProduct , editeProductById} from "../../JS/actions/productsActions"
import {useParams} from "react-router-dom"
import "./CreateProduct.css"

const initialState = {
    title: "",
    price: 0 ,
    description: "",
    category: "",
    rating : 0 ,
    numReviews : 0
    
}



export const CreateProduct = () => {
    const dispatch = useDispatch()
    const addNewProduct = (formData) => dispatch(addProduct(formData))
    const UpdateProduct = (formData , id) => dispatch(editeProductById(formData , id))
    const Product  = useSelector((state) => state.productsReducer.products)
    const [products , setProducts] = useState(Product)

    
    const [product , setProduct] = useState(initialState)
    const { title , price , description , category , rating ,  numReviews,  _id } = product
    const [images , setImages] = useState([])
    const [onEdit , setOnEdit] = useState(false)

    const param = useParams()
    useEffect(() => {
        setOnEdit(true)
        if(param.id){
            products.forEach(product => {
                if(product._id === param.id) setProduct(product)
                setImages([product.images])
            })
        } else{
            setOnEdit(false)
            setProduct(initialState)
            setImages([])
        }
    } , [param.id , Product])

    const handleChange = e => {
        const {name , value} = e.target
        setProduct({...product , [name]:value })
    }

    const handleUploadInput = e => {
        let newImages = []
        let num = 0
        let err = ""
        const files = [...e.target.files]
        if(files.length === 0) return err ="Files does not exist"
        files.forEach(file => {
            if(file.size > 1024 * 1024)
            return err = "the largest image size is 1mb"
            
            if(file.type !== "image/jpeg" && file.type !== "image/png")
            return err = "Image format is incorrect."
            
            num += 1
            if(num <= 5) newImages.push(file )
            return newImages
            
        })
        if(err) return err
        
        
        setImages([...images , ...newImages] )
    }
    
    const deleteImage = index => {
        const newArr = [...images]
        newArr.splice(index , 1)
        setImages(newArr)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let media =[]
        const imgNewURL = images.filter(img => !img.url)
        const imgOldURL = images.filter(img => img.url)
        

        if(onEdit) {
            UpdateProduct({...product , images: [...imgOldURL , ...media]})
        }else{
            addNewProduct({...product , images: [...imgOldURL , ...media]})
        }
        

    }


    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUploadInput} multiple accept="image/*"/>
                {
                        images.map((img , index) =>( 
                    <div key={index} id="file_img">
                    <img src={img.url ? img.url : URL.createObjectURL(img)} alt=""/>
                    <span onClick={() => deleteImage(index)}>X</span>
                </div>
                ))
                }
                <form onSubmit={handleSubmit}>
                    
                        
                        <div className="row">
                        <input type="text" name="title" value={title}
                        placeholder="Title" onChange={handleChange} />
                        </div>
                        
                        <div className="row">
                        <input type="number" name="price" value={price}
                        placeholder="Price" onChange={handleChange} />
                        </div>
                        
                        <div className="row">
                        <textarea type="text" name="description" value={description}
                        placeholder="Description" onChange={handleChange} />
                        </div>
                        
                        <div className="row">
                        <input type="text" name="category" value={category}
                        placeholder="Category" onChange={handleChange} />
                        </div>
                        
                        <div className="row">
                        <input type="number" name="rating" value={rating}
                        placeholder="Rating" onChange={handleChange} />
                        </div>
                        
                        <div className="row">
                        <input type="number" name="numReviews" value={numReviews}
                        placeholder="numReviews" onChange={handleChange} />
                        </div>
                        
                        
            <button  type="submit">{onEdit ? "Update" : "Create"}</button>
            
                    
                </form>

            </div>
        </div>
    )
}
