

export interface Product {
    id: number
    name: string
    main_image: Image
    product_images: Image[]
    stock_find: boolean
    stock_min: number | null
    stock_max: number | null
    stock_unlimited_min: boolean
    stock_unlimited_max: boolean
    code_min: string
    code_max: string
    price01_min: string
    price01_max: string
    price02_min: string
    price02_max: string
    description: string
    description_list: string | null
    free_area: string | null
    search_word: string | null
    categories: Category[][]
    has_product_class: boolean
    class_name1: string
    class_name2: string
    product_classes: ProductClass[]
}


export interface Image {
    id: number
    file_name: string
    sort_no: number
}


export interface Category {
    id: number
    name: string
}


export interface ProductClass {
    id: number
    code: string
    stock: number | null
    stock_find: boolean
    is_stock_unlimited: boolean
    sale_limit: number | null
    price01: string | null
    price02: string | null
    delivery_fee: number | null
    point_rate: number | null
    has_class_category1: boolean
    has_class_category2: boolean
    tax_rate: boolean
    class_category1_id: number | null
    class_category1: string | null
    class_category2_id: number | null
    class_category2: string | null
}


export interface ApiResponse {
    success: boolean
    messages?: string[]
}

export interface ProductResponse extends ApiResponse {
    product: Product
}

export interface ProductListRequest {
    mode: string | null
    category_id: number | null
    name: string | null
    pageno: number | null
    disp_number: number | null
    orderby: number | null
}

export interface ProductListResponse {
    success: boolean
    products: Product[]
}

export interface ShopResponse {
    success: boolean
    items: {
    }
}

export interface CartAddRequest {
    product_class_id: number
    quantity: number
}

export interface CartAddResponse extends ApiResponse {
    cart_count: number
}

export interface CartResponse {
    success: boolean
    items: {
        id: number
        product_class_id: number
        name: string
        image: string
        price: string
        quantity: number
        subtotal: number
    }[]
    count: number
    total: string
}
