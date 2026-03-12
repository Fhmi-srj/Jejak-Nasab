<?php

namespace Database\Seeders;

use App\Models\ActivityLog;
use App\Models\Bani;
use App\Models\BaniUser;
use App\Models\Marriage;
use App\Models\Member;
use App\Models\User;
use App\Models\UserTier;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // ── User Tiers ──
        $free = UserTier::create([
            'name' => 'Gratis',
            'color' => '#6B7280',
            'max_banis' => 1,
            'max_generations' => 10,
            'can_generate_pdf' => false,
            'can_generate_image' => false,
            'is_default' => true,
        ]);

        UserTier::create([
            'name' => 'Premium',
            'color' => '#F59E0B',
            'max_banis' => 5,
            'max_generations' => 50,
            'can_generate_pdf' => true,
            'can_generate_image' => true,
            'is_default' => false,
        ]);

        UserTier::create([
            'name' => 'Unlimited',
            'color' => '#8B5CF6',
            'max_banis' => 999,
            'max_generations' => 999,
            'can_generate_pdf' => true,
            'can_generate_image' => true,
            'is_default' => false,
        ]);

        // ── Users ──
        $admin = User::create([
            'name' => 'Admin Nasab',
            'email' => 'admin@jejaknasab.com',
            'password' => 'admin123',
            'role' => 'SUPER_ADMIN',
            'status' => 'APPROVED',
            'tier_id' => $free->id,
        ]);

        $user1 = User::create([
            'name' => 'Budi Santoso',
            'email' => 'budi@example.com',
            'password' => 'user123',
            'role' => 'USER',
            'status' => 'APPROVED',
            'tier_id' => $free->id,
        ]);

        User::create([
            'name' => 'Siti Aminah',
            'email' => 'siti@example.com',
            'password' => 'user123',
            'role' => 'USER',
            'status' => 'PENDING',
            'tier_id' => $free->id,
        ]);

        // ── Bani ──
        $bani = Bani::create([
            'name' => 'Bani H. Ahmad Dahlan',
            'description' => 'Keturunan H. Ahmad Dahlan dari Padang, Sumatera Barat.',
            'created_by_id' => $admin->id,
        ]);

        BaniUser::create(['bani_id' => $bani->id, 'user_id' => $admin->id, 'role' => 'ADMIN']);
        BaniUser::create(['bani_id' => $bani->id, 'user_id' => $user1->id, 'role' => 'EDITOR']);

        // ── Members (Gen 0) ──
        $root = Member::create([
            'bani_id' => $bani->id, 'full_name' => 'H. Ahmad Dahlan', 'nickname' => 'Pak Dahlan',
            'gender' => 'MALE', 'birth_date' => '1920-03-15', 'birth_place' => 'Padang',
            'death_date' => '2005-08-20', 'is_alive' => false, 'city' => 'Padang',
            'bio' => 'Pendiri keluarga besar', 'generation' => 0, 'added_by_id' => $admin->id,
        ]);
        $bani->update(['root_member_id' => $root->id]);

        $rootWife = Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Hj. Salmah', 'nickname' => 'Mak Salmah',
            'gender' => 'FEMALE', 'birth_date' => '1925-07-10', 'birth_place' => 'Bukittinggi',
            'death_date' => '2010-12-01', 'is_alive' => false, 'city' => 'Padang',
            'generation' => 0, 'added_by_id' => $admin->id,
        ]);
        Marriage::create(['husband_id' => $root->id, 'wife_id' => $rootWife->id, 'marriage_date' => '1945-01-01', 'is_active' => true, 'marriage_order' => 1]);

        // ── Members (Gen 1) ──
        $c1 = Member::create([
            'bani_id' => $bani->id, 'full_name' => 'H. Muhammad Yusuf', 'nickname' => 'Pak Yusuf',
            'gender' => 'MALE', 'birth_date' => '1948-05-20', 'birth_place' => 'Padang',
            'is_alive' => false, 'death_date' => '2020-03-15', 'city' => 'Jakarta',
            'phone_whatsapp' => '081234567890', 'father_id' => $root->id, 'mother_id' => $rootWife->id,
            'generation' => 1, 'added_by_id' => $admin->id,
        ]);
        $c1w = Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Hj. Fatimah', 'gender' => 'FEMALE',
            'birth_date' => '1952-09-12', 'birth_place' => 'Jakarta', 'is_alive' => true,
            'city' => 'Jakarta', 'phone_whatsapp' => '081234567891', 'generation' => 1,
            'added_by_id' => $admin->id,
        ]);
        Marriage::create(['husband_id' => $c1->id, 'wife_id' => $c1w->id, 'marriage_date' => '1970-06-15', 'is_active' => true, 'marriage_order' => 1]);

        $c2 = Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Hj. Aisyah', 'nickname' => 'Bu Aisyah',
            'gender' => 'FEMALE', 'birth_date' => '1950-11-03', 'birth_place' => 'Padang',
            'is_alive' => true, 'city' => 'Bandung', 'phone_whatsapp' => '081298765432',
            'father_id' => $root->id, 'mother_id' => $rootWife->id, 'generation' => 1,
            'added_by_id' => $admin->id,
        ]);
        $c2h = Member::create([
            'bani_id' => $bani->id, 'full_name' => 'H. Rahmat Hidayat', 'gender' => 'MALE',
            'birth_date' => '1947-02-28', 'birth_place' => 'Bandung', 'is_alive' => true,
            'city' => 'Bandung', 'generation' => 1, 'added_by_id' => $admin->id,
        ]);
        Marriage::create(['husband_id' => $c2h->id, 'wife_id' => $c2->id, 'marriage_date' => '1972-04-20', 'is_active' => true, 'marriage_order' => 1]);

        Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Ir. Ibrahim', 'nickname' => 'Pak Ibrahim',
            'gender' => 'MALE', 'birth_date' => '1955-08-17', 'birth_place' => 'Padang',
            'is_alive' => true, 'city' => 'Surabaya', 'phone_whatsapp' => '081345678901',
            'father_id' => $root->id, 'mother_id' => $rootWife->id, 'generation' => 1,
            'added_by_id' => $admin->id,
        ]);

        // ── Members (Gen 2) ──
        $gc1 = Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Dr. Rizki Yusuf', 'gender' => 'MALE',
            'birth_date' => '1975-03-10', 'birth_place' => 'Jakarta', 'is_alive' => true,
            'city' => 'Jakarta', 'phone_whatsapp' => '082111222333', 'father_id' => $c1->id,
            'mother_id' => $c1w->id, 'generation' => 2, 'added_by_id' => $admin->id,
        ]);
        Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Nurul Yusuf', 'nickname' => 'Nurul',
            'gender' => 'FEMALE', 'birth_date' => '1978-07-25', 'birth_place' => 'Jakarta',
            'is_alive' => true, 'city' => 'Depok', 'father_id' => $c1->id, 'mother_id' => $c1w->id,
            'generation' => 2, 'added_by_id' => $admin->id,
        ]);
        $gc3 = Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Ahmad Fauzi Hidayat', 'nickname' => 'Fauzi',
            'gender' => 'MALE', 'birth_date' => '1976-01-05', 'birth_place' => 'Bandung',
            'is_alive' => true, 'city' => 'Bandung', 'father_id' => $c2h->id, 'mother_id' => $c2->id,
            'generation' => 2, 'added_by_id' => $admin->id,
        ]);
        Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Zahra Hidayat', 'gender' => 'FEMALE',
            'birth_date' => '1980-12-15', 'birth_place' => 'Bandung', 'is_alive' => true,
            'city' => 'Yogyakarta', 'father_id' => $c2h->id, 'mother_id' => $c2->id,
            'generation' => 2, 'added_by_id' => $admin->id,
        ]);

        // ── Members (Gen 3) ──
        Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Bilal Rizki', 'gender' => 'MALE',
            'birth_date' => '2005-04-10', 'birth_place' => 'Jakarta', 'is_alive' => true,
            'city' => 'Jakarta', 'father_id' => $gc1->id, 'generation' => 3,
            'added_by_id' => $admin->id,
        ]);
        Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Khadijah Rizki', 'nickname' => 'Dijah',
            'gender' => 'FEMALE', 'birth_date' => '2008-09-22', 'birth_place' => 'Jakarta',
            'is_alive' => true, 'city' => 'Jakarta', 'father_id' => $gc1->id, 'generation' => 3,
            'added_by_id' => $admin->id,
        ]);
        Member::create([
            'bani_id' => $bani->id, 'full_name' => 'Rafif Fauzi', 'gender' => 'MALE',
            'birth_date' => '2003-06-18', 'birth_place' => 'Bandung', 'is_alive' => true,
            'city' => 'Bandung', 'father_id' => $gc3->id, 'generation' => 3,
            'added_by_id' => $admin->id,
        ]);

        // ── Activity Log ──
        ActivityLog::create([
            'user_id' => $admin->id,
            'bani_id' => $bani->id,
            'action' => 'CREATE',
            'entity_type' => 'BANI',
            'entity_id' => $bani->id,
            'description' => 'Membuat bani ' . $bani->name,
        ]);

        $this->command->info('✅ Seeding complete!');
        $this->command->info('📋 admin@jejaknasab.com / admin123');
        $this->command->info('   budi@example.com / user123');
    }
}
