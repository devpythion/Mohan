<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Scores</title>
    <style>
        th, td, table {
            border: 2px solid black;
            border-collapse: collapse;
        }
        tr:nth-child(2n+1) {
            background-color: antiquewhite;
        }
    </style>
</head>

<body>
    <?php
    $students = [
        "Narayan" => [
            "maths" => ["practical" => 25, "theory" => 50],
            "physics" => ["practical" => 20, "theory" => 30],
            "chemistry" => ["practical" => 35, "theory" => 45],
            "biology" => ["practical" => 18, "theory" => 42],
            "english" => ["practical" => 0, "theory" => 60],
        ],
        "Mohan" => [
            "maths" => ["practical" => 20, "theory" => 55],
            "physics" => ["practical" => 22, "theory" => 33],
            "chemistry" => ["practical" => 40, "theory" => 35],
            "biology" => ["practical" => 25, "theory" => 40],
            "english" => ["practical" => 0, "theory" => 65],
        ],
        "Rama" => [
            "maths" => ["practical" => 30, "theory" => 45],
            "physics" => ["practical" => 28, "theory" => 32],
            "chemistry" => ["practical" => 38, "theory" => 42],
            "biology" => ["practical" => 20, "theory" => 35],
            "english" => ["practical" => 0, "theory" => 70],
        ],
        "Bibek" => [
            "maths" => ["practical" => 27, "theory" => 48],
            "physics" => ["practical" => 25, "theory" => 35],
            "chemistry" => ["practical" => 32, "theory" => 38],
            "biology" => ["practical" => 30, "theory" => 40],
            "english" => ["practical" => 0, "theory" => 55],
        ],
        "Smile" => [
            "maths" => ["practical" => 22, "theory" => 50],
            "physics" => ["practical" => 21, "theory" => 31],
            "chemistry" => ["practical" => 35, "theory" => 40],
            "biology" => ["practical" => 23, "theory" => 37],
            "english" => ["practical" => 0, "theory" => 68],
        ]
    ];
    ?>
    <table>
        <tr>
            <th rowspan="2">Name</th>
            <th colspan="3">Maths</th>
            <th colspan="3">Physics</th>
            <th colspan="3">Chemistry</th>
            <th colspan="3">Biology</th>
            <th colspan="3">English</th>
        </tr>
        <tr>
            <th>Theory</th>
            <th>Practical</th>
            <th>Total</th>
            <th>Theory</th>
            <th>Practical</th>
            <th>Total</th>
            <th>Theory</th>
            <th>Practical</th>
            <th>Total</th>
            <th>Theory</th>
            <th>Practical</th>
            <th>Total</th>
            <th>Theory</th>
            <th>Practical</th>
            <th>Total</th>
        </tr>
        <?php foreach ($students as $name => $subjects) { ?>
            <tr>
                <td><?= htmlspecialchars($name) ?></td>
                <?php foreach ($subjects as $subject) { ?>
                    <td><?= htmlspecialchars($subject["theory"]) ?></td>
                    <td><?= htmlspecialchars($subject["practical"]) ?></td>
                    <td><?= htmlspecialchars($subject["theory"] + $subject["practical"]) ?></td>
                <?php } ?>
            </tr>
        <?php } ?>
    </table>
</body>

</html>
