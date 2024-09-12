package com.yupanquidev.bookstream

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform