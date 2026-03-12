<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_tiers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name')->unique();
            $table->string('color')->default('#6B7280');
            $table->integer('max_banis')->default(1);
            $table->integer('max_generations')->default(10);
            $table->boolean('can_generate_pdf')->default(false);
            $table->boolean('can_generate_image')->default(false);
            $table->boolean('is_default')->default(false);
            $table->timestamp('created_at')->useCurrent();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('role', ['SUPER_ADMIN', 'ADMIN', 'USER'])->default('USER');
            $table->enum('status', ['PENDING', 'APPROVED', 'SUSPENDED'])->default('PENDING');
            $table->string('avatar')->nullable();
            $table->uuid('tier_id')->nullable();
            $table->timestamps();

            $table->foreign('tier_id')->references('id')->on('user_tiers')->onDelete('set null');
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignUuid('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('users');
        Schema::dropIfExists('user_tiers');
    }
};
