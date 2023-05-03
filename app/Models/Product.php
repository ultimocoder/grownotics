<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'cat_id', 'sub_cat_id', 'brand_id', 'feturer_image', 'images', 'slug', 'price', 'dis_price', 'product_des', 'status'];                                             
}
