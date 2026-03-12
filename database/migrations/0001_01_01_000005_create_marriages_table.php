<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('marriages', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('husband_id');
            $table->uuid('wife_id');
            $table->date('marriage_date')->nullable();
            $table->date('divorce_date')->nullable();
            $table->boolean('is_active')->default(true);
            $table->integer('marriage_order')->default(1);
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('husband_id')->references('id')->on('members')->onDelete('cascade');
            $table->foreign('wife_id')->references('id')->on('members')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('marriages');
    }
};
