<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Database\Seeder;

class TasksSeeder extends Seeder
{
    public function run(): void
    {
        $project_ids = Project::all()->pluck('id')->toArray();

        $now = now();
        $tasks = [];
        $project_priorities = [];
        foreach ($project_ids as $project_id) {
            $project_priorities[$project_id] = 0;
        }

        for ($i = 1; $i <= 10; $i++) {
            $project_id = $project_ids[array_rand($project_ids)];
            $project_priorities[$project_id]++;

            $tasks[] = [
                'project_id' => $project_id,
                'priority' => $project_priorities[$project_id],
                'name' => "Task " . $project_priorities[$project_id],

            ];
        }

        Task::insert($tasks);
    }
}