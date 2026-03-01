<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('bani_id');
            $table->string('full_name');
            $table->string('nickname')->nullable();
            $table->enum('gender', ['MALE', 'FEMALE']);
            $table->date('birth_date')->nullable();
            $table->string('birth_place')->nullable();
            $table->date('death_date')->nullable();
            $table->boolean('is_alive')->default(true);
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('phone_whatsapp')->nullable();
            $table->json('social_media')->nullable();
            $table->string('photo')->nullable();
            $table->text('bio')->nullable();
            $table->uuid('father_id')->nullable();
            $table->uuid('mother_id')->nullable();
            $table->integer('generation')->default(0);
            $table->uuid('added_by_id')->nullable();
            $table->timestamps();

            $table->index('bani_id');
            $table->index('father_id');
            $table->index('mother_id');

            $table->foreign('bani_id')->references('id')->on('banis')->onDelete('cascade');
            $table->foreign('father_id')->references('id')->on('members')->onDelete('set null');
            $table->foreign('mother_id')->references('id')->on('members')->onDelete('set null');
            $table->foreign('added_by_id')->references('id')->on('users')->onDelete('set null');
        });

        // Add foreign key for banis.root_member_id after members table is created
        Schema::table('banis', function (Blueprint $table) {
            $table->foreign('root_member_id')->references('id')->on('members')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('banis', function (Blueprint $table) {
            $table->dropForeign(['root_member_id']);
        });
        Schema::dropIfExists('members');
    }
};
