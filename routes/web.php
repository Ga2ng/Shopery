<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Login', [
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/test', function () {
    return Inertia::render('Test');
})->middleware(['auth', 'verified'])->name('test');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/home', function () {
//     return Inertia::render('Home');
// })->name('home');

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

Route::get('/about', function () {
    return Inertia::render('AboutUs');
})->middleware(['auth', 'verified'])->name('about');

Route::get('/shop', function () {
    return Inertia::render('Shop');
})->middleware(['auth', 'verified'])->name('shop');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->middleware(['auth', 'verified'])->name('contact');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->middleware(['auth', 'verified'])->name('blog');










require __DIR__.'/auth.php';
