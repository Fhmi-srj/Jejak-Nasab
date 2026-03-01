<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('banis', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('cover_image')->nullable();
            $table->enum('tree_orientation', ['VERTICAL', 'HORIZONTAL'])->default('VERTICAL');
            $table->boolean('is_public')->default(false);
            $table->boolean('show_wa_public')->default(false);
            $table->boolean('show_birth_public')->default(false);
            $table->boolean('show_address_public')->default(false);
            $table->boolean('show_socmed_public')->default(false);
            $table->enum('card_theme', ['STANDARD', 'CLASSIC', 'GRADIENT', 'GLASS', 'DARK', 'NATURE'])->default('STANDARD');
            $table->uuid('created_by_id');
            $table->uuid('root_member_id')->nullable()->unique();
            $table->timestamps();

            $table->foreign('created_by_id')->references('id')->on('users')->onDelete('restrict');
        });

        Schema::create('bani_users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('bani_id');
            $table->uuid('user_id');
            $table->enum('role', ['ADMIN', 'EDITOR', 'VIEWER'])->default('EDITOR');
            $table->timestamp('joined_at')->useCurrent();

            $table->unique(['bani_id', 'user_id']);
            $table->foreign('bani_id')->references('id')->on('banis')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bani_users');
        Schema::dropIfExists('banis');
    }
};
