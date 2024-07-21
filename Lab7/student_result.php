<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        th, td, table
        {
            border: 2px solid black;
            border-collapse: collapse;
        }
        tr:nth-child(2n+1){
            background-color: antiquewhite;
        }
    </style>
</head>

<body>
    <?php
    $student = [
        "Narayan" => [
            "physics" => ["practical" => 20, "theory" => 30],
            "biology" => ["practical" => 10, "theory" => 40],
            "chemistry" => ["practical" => 50, "theory" => 30],
        ],
        "Mohan" => [
            "physics" => ["practical" => 20, "theory" => 30],
            "biology" => ["practical" => 10, "theory" => 40],
            "chemistry" => ["practical" => 50, "theory" => 30],
        ],
        "Rama" => [
            "physics" => ["practical" => 20, "theory" => 30],
            "biology" => ["practical" => 10, "theory" => 40],
            "chemistry" => ["practical" => 50, "theory" => 30],
        ],
        "Bibek" => [
            "physics" => ["practical" => 20, "theory" => 30],
            "biology" => ["practical" => 10, "theory" => 40],
            "chemistry" => ["practical" => 50, "theory" => 30],
        ],
        "Smile" => [
            "physics" => ["practical" => 20, "theory" => 30],
            "biology" => ["practical" => 10, "theory" => 40],
            "chemistry" => ["practical" => 50, "theory" => 30],
        ]

    ];
    ?>
        <table>
            <tr>
                <th  rowspan="2">Name</th>
                <th colspan="3">Physics</th>
                <th colspan="3">Biology</th>
                <th colspan="3">Chemistry</th>
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
            </tr>
    <?php foreach ($student as $key => $value) {
    ?>
    
            <tr>
                <td><?=$key?></td>

                <?php foreach ($value as $key1 => $value1) {
                   ?>
                   <td><?=$value1["theory"]?></td>
                   <td><?=$value1["practical"]?></td>
                   <td><?=$value1["practical"]+$value1["theory"]?></td>
                   <?php
                } ?>
            </tr>
            <?php
    }
    ?>
    </table>
</body>

</html>