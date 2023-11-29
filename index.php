<!-- Add the following PHP code to fetch data from the database -->
<?php
require_once('backend/table.php');
$eventsData = getEventsData(); // Assuming getEventsData is a function in table.php to retrieve data
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
            name="description"
            content="A Data Visualization System for the USeP Gad Office."
        />
        <title>GAD Web System</title>

        <!-- Logo for the webpage tab -->
        <link
            rel="icon"
            href="./assets/images/GAD_Logo.png"
            type="image/png"
            sizes="32x32"
        />

        <link rel="stylesheet" href="index.css" />
        <link rel="stylesheet" href="./assets/bootstrap/bootstrap.min.css" />
        <link href="./assets/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/modal/modal.css" />
        
        <!-- DATATABLE STYLE AND SCRIPTS -->
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script src="https://unpkg.com/xlsx/dist/xlsx.full.min.js"></script>
        <link
            rel="stylesheet"
            href="./assets/datatable/jquery.dataTables.min.css"
        />
    </head>
    <body id="body-pd">
        <header class="header" id="header">
            <div class="header_toggle">
                <i class="bx bx-menu" id="header-toggle"></i>
            </div>

            <!------- DATE SELECTOR -------->
            <div
                class="d-flex flex-row align-items-center justify-content-evenly m-2 p-2 px-3 gap-3 rounded-3"
                id="dateSelector"
            >
                <div
                    class="d-flex justify-content-center align-items-center gap-2"
                >
                    <label for="selectedYear">Year:</label>
                    <select
                        name="selectedYear"
                        id="selectedYear"
                        class="form-select"
                    >
                        <option selected value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                </div>

                <div
                    class="d-flex justify-content-center align-items-center gap-2"
                >
                    <label for="selectedMonth">Month:</label>
                    <select
                        name="selectedMonth"
                        id="selectedMonth"
                        class="text-center form-select"
                    >
                        <option selected value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
            </div>

            <div class="header_img">
                <img src="./assets/images/GAD_Logo.png" alt="" />
            </div>
        </header>

        <!-------NAV BAR -------->
        <div class="l-navbar" id="nav-bar">
            <nav class="nav">
                <div>
                    <a href="index.php" class="nav_logo">
                        <i class="bx bx-layer nav_logo-icon"></i>
                        <span class="nav_logo-name">GAD OFFICE</span>
                    </a>
                    <div class="nav_list">
                        <a
                            href="index.php"
                            class="nav_link active"
                            id="attendance"
                        >
                            <i class="bx bx-grid-alt nav_icon"></i>
                            <span class="nav_name">Attendance</span>
                        </a>
                        <a
                            href="./assets/pages/gender.html"
                            class="nav_link"
                            id="gender"
                        >
                            <i class="bx bx-user nav_icon"></i>
                            <span class="nav_name">Gender</span>
                        </a>
                        <a
                            href="./assets/pages/events.html"
                            class="nav_link"
                            id="events"
                        >
                            <i class="bx bx-message-square-detail nav_icon"></i>
                            <span class="nav_name">Events</span>
                        </a>
                        <a
                            href="./assets/pages/logs.html"
                            class="nav_link"
                            id="logs"
                        >
                            <i class="bx bx-bookmark nav_icon"></i>
                            <span class="nav_name">Logs</span>
                        </a>
                        <a
                            class="nav_link"
                            id="import"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            <i class="bx bx-folder nav_icon"></i>
                            <span class="nav_name">Import</span>
                        </a>
                    </div>
                </div>
                <a href="#" class="nav_link" id="SignOut">
                    <i class="bx bx-log-out nav_icon"></i>
                    <span class="nav_name">SignOut</span>
                </a>
            </nav>
        </div>

        <!-- Modal CONTENT-->
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							Import Excel Files Here:
						</h5>
						<button type="button" class="close" data-bs-dismiss="modal" id="x" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					
					<div class="modal-body">
						<div class="table-one">
							<form class="create" method="post" id="importForm">
								<label>Choose event:</label>
								<!-- <div class="dropdown">
									<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										Choose here...
									</button>
									<ul class="dropdown-menu">
										<li><a class="dropdown-item" href="#">Mental Health Event</a></li>
										<li><a class="dropdown-item" href="#">HIV Awareness</a></li>
										<li><a class="dropdown-item" href="#">Something else here</a></li>
									</ul>
								</div> -->
								<div class="dropdown">
									<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										Choose here...
									</button>
									<ul class="dropdown-menu" id="eventDropdown">
										<!-- Dropdown items will be added dynamically using AJAX -->
									</ul>
								</div>
								<script>
									$(document).ready(function () {
										$('#eventDropdown').on('click', '.dropdown-item', function () {
											var selectedEvent = $(this).data('event');
											$('.dropdown-toggle').text(selectedEvent);
											console.log($('.dropdown-toggle').text())
										});
										$.ajax({
											url: 'backend/get_event.php',
											method: 'GET',
											dataType: 'json',
											success: function (data) {
												$('#eventDropdown').empty();
												data.forEach(function (eventName) {
													$('#eventDropdown').append('<li><a class="dropdown-item" href="#" data-event="' + eventName + '">' + eventName + '</a></li>');
												});
											},
											error: function (xhr, status, error) {
												console.error('AJAX Error:', error);
											},
										});
									});
								</script>

								<label>Choose date:</label>
								<input type="date" class="form-control" id="eventDate" />
		
								<label>Import file:</label>
								<input id="eventFile" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .xlsm, .xlsb, .xltx" />
								<button type="button" class="btn btn-dark" id="uploadButton">Upload</button>
							</form>
							<script>
								$(document).ready(function () {
									$("#uploadButton").click(function () {
										var reader = new FileReader();
										reader.onload = function (e) {
											var data = e.target.result;
											var workbook = XLSX.read(data, { type: 'binary' });
											var sheetName = workbook.SheetNames[0];
											var worksheet = workbook.Sheets[sheetName];
											var columnNames = [];
											for (var key in worksheet) {
												if (key[0] === '!') continue;
												if (worksheet.hasOwnProperty(key)) {
													var col = key.substring(0, 1);
													if (columnNames.indexOf(col) === -1) {
														columnNames.push(col);
													}
												}
											}
											var sexColumnIndex = columnNames.indexOf("C"); 
											var sexColumnValues = [];
											for (var key in worksheet) {
												if (key[0] === '!') continue;
												if (worksheet.hasOwnProperty(key)) {
													var col = key.substring(0, 1);
													if (col === "C") {
														sexColumnValues.push(worksheet[key].v);
													}
												}
											}
											var jsonData = {
												sexColumn: sexColumnValues
											};
											var formData = {
												eventName: $('.dropdown-toggle').text(),
												eventDate: $("#eventDate").val(),
												eventFile: jsonData
											}
											console.log(formData);
											sendFormDataToServer(formData);
										};
										reader.readAsBinaryString($("#eventFile")[0].files[0]);
									});
									function sendFormDataToServer(formData) {
										console.log(formData);
										$.ajax({
											url: "backend/add_attendance.php",
											type: "POST",
											data: formData,
											// contentType: false,
											// processData: false,
											cache: false, // Disable caching for the request
											success: function (response) {
												console.log(response);
												alert("success done")
												// Reload the current page
												location.reload();

											},
											error: function (xhr, status, error) {
												console.error(error);
											}
										});
									}
								});
							</script>
						</div>
		
						<div class="table-two">
							<form class="create" method="post" action="backend/process.php">
							
								<label>Event Name:</label>
								<input type="text" name="eventName" placeholder="Event Name" />

								<label>Event Description:</label>
								<input type="text" name="eventDescription" placeholder="Event Description" />

								<button type="submit" class="btn btn-dark" id="btn-add">Add</button>
		
								<table class="modal-table" id="table">
									<thead>
										<tr>
											<th>Event Name</th>
											<th>Details</th>
											<th>Action</th>
										</tr>
									</thead>
									<?php foreach ($eventsData as $event) : ?>
										<tbody>
												<tr>
												<td><?php echo $event['event_name']; ?></td>
												<td><?php echo $event['event_description']; ?></td>
												<td>
													<button type="button" class="btn btn-warning" id="action">Edit</button>
													<button type="button" class="btn btn-danger" id="action">Delete</button>
												</td>
											</tr>
										<?php endforeach; ?>
									</tbody>
								</table>
							</form>
						</div>
					</div>
		
					<div class="modal-footer">
						<button type="button" class="btn btn-dark" id="btn-close" data-bs-dismiss="modal">Close</button>
					</div>
					<br />
				</div>
			</div>
		</div>

        <!--Container Main start-->
        <main class="main container-xxl">
            <!------ ATTENDANCE CHART CONTENT ---------->
            <div class="outline main-wrapper pt-lg-3">
                <div class="outline row">
                    <!----- MAIN CHART / UPPER INFO ------->
                    <section class="outline main-chart-section col-lg-8">
                        <aside class="outline row pb-3">
                            <!------ CHART NAME ------>
                            <div
                                class="outline col-lg-3 px-lg-2"
                                id="card-chart-name"
                            >
                                <div
                                    class="card-wrapper card shadow-sm text-center"
                                >
                                    <div
                                        class="card-body card-info-height align-items-center justify-content-center d-flex flex-column"
                                    >
                                        <h5 class="card-title bold m-0">
                                            ATTENDANCE
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <!------ CHART DATE ------>
                            <div
                                class="outline col-lg-3 px-lg-2"
                                id="card-date"
                            >
                                <div
                                    class="card-wrapper card shadow-sm text-center"
                                >
                                    <div
                                        class="card-body card-info-height d-flex flex-column align-items-center justify-content-center"
                                    >
                                        <h6
                                            class="card-subtitle mb-2 text-body-secondary"
                                        >
                                            DATE
                                        </h6>
                                        <div
                                            class="d-flex flex-row gap-2 gap-lg-3"
                                        >
                                            <h5
                                                class="card-title card-year m-0"
                                                id="card-year"
                                            >
                                                2023
                                            </h5>
                                            <h5
                                                class="card-title card-month m-0"
                                                id="card-month"
                                            >
                                                -
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!------ YEARLY TOTAL ------>
                            <aside class="SideTotal col-lg-3 outline px-lg-2">
                                <div
                                    class="card-wrapper card shadow-sm text-center"
                                >
                                    <div class="card-body card-info-height">
                                        <h6
                                            class="card-subtitle mb-2 text-body-secondary"
                                        >
                                            YEARLY TOTAL
                                        </h6>
                                        <h5
                                            class="card-title m-0"
                                            id="card-yearly-total"
                                        >
                                            -
                                        </h5>
                                    </div>
                                </div>
                            </aside>

                            <!------ MONTHLY TOTAL ------>
                            <aside class="SideTotal col-lg-3 outline px-lg-2">
                                <div
                                    class="card-wrapper card shadow-sm text-center"
                                >
                                    <div class="card-body card-info-height">
                                        <h6
                                            class="card-subtitle mb-2 text-body-secondary"
                                        >
                                            MONTHLY TOTAL
                                        </h6>
                                        <h5
                                            class="card-title m-0"
                                            id="card-monthly-total"
                                        >
                                            -
                                        </h5>
                                    </div>
                                </div>
                            </aside>
                        </aside>

                        <!----- MAIN CHART ------->
                        <div class="outline container-fluid p-0 m-0">
                            <div
                                class="main-chart-wrapper card shadow rounded-3"
                            >
                                <canvas class="" id="main-chart"></canvas>
                            </div>
                        </div>
                    </section>

                    <!----- SIDE CHARTS ------->
                    <section
                        class="outline side-wrapper col-lg-4 px-3 d-flex flex-column justify-content-between"
                    >
                        <!----- YEARLY CHART ------->
                        <div class="outline container-fluid p-0 m-0">
                            <div
                                class="yearly-chart-wrapper card shadow rounded-3"
                            >
                                <canvas class="" id="yearly-chart"></canvas>
                            </div>
                        </div>

                        <!-------- QUARTERLY --------->
                        <div
                            class="outline side-quarterly container-fluid p-0 m-0"
                        >
                            <div
                                class="side-chart-wrapper card shadow rounded-3 px-lg-4 p-lg-3"
                            >
                                <canvas id="side-chart-quarterly"></canvas>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
        <!--Container Main end-->

        <!----------------------->
        <!------ SCRIPTS -------->
        <!----------------------->
        <!-- LIBS/ETC. IMPORTS -->
        <script
            type="module"
            src="./assets/bootstrap/bootstrap.bundle.min.js"
        ></script>
        <script
            type="module"
            src="./assets/jquery/jquery-3.7.1.min.js"
        ></script>
        <script
            type="module"
            src="./assets/datatable/jquery.dataTables.min.js"
        ></script>

        <script type="module" src="./assets/charts/chart.umd.min.js"></script>
        <script type="module" src="./assets/boxicons/boxicons.js"></script>
        <script type="module" src="index.js"></script>
        <script type="module" src="./assets/sidebar/sidebar.js"></script>

        <!-- Modal -->
        <script type="module" src="./assets/modal/modal.js"></script>
    </body>
</html>
<script>
    $(document).ready(function () {
        $('#btn-add').click(function () {
            // Display a pop-up message using Bootstrap modal
            alert("Data added successfully!");
        });
    });
</script>