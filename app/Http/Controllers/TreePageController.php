<?php

namespace App\Http\Controllers;

use App\Models\Bani;
use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TreePageController extends Controller
{
    // Public tree view
    public function show(string $id): Response
    {
        $bani = Bani::select('id', 'name', 'is_public', 'show_wa_public', 'show_birth_public', 'show_address_public', 'show_socmed_public', 'tree_orientation', 'card_theme', 'root_member_id')
            ->findOrFail($id);

        if (!$bani->is_public) {
            abort(404, 'Silsilah ini tidak dipublikasikan');
        }

        return Inertia::render('Tree/Show', [
            'bani' => $bani,
        ]);
    }
}
