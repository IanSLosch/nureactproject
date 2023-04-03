function SampleHeader() {
    return (
        <header>
            <div className="gradient-bg bg-image-p1">
                <div class="color-overlay">
                    <nav class="navbar navbar-expand-md navbar-dark ">
                        <div class="container">
                            <a class="navbar-brand" href="#">
                                <img src="image/logo.png" height="40" width="230" />
                            </a>
                            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                                <i class="fa fa-solid fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarCollapse">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
                                    <li class="nav-item"><a class="nav-link" href="bannedlist.html">Banned List</a></li>
                                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                                    <li class="nav-item"><a class="nav-link" href="index2.html">Help</a></li>
                                </ul>
                                <span class="navbar-text ml-auto">
                                    <a role="button" id="loginButton" data-toggle="modal" data-target="#loginModal">
                                        <div><i class="fa fa-solid fa-hat-wizard"></i><span class="d-none d-sm-inline ms-sm-1"> Login</span>
                                        </div>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </nav>
                    <div class="container d-flex flex-column justify-content-end align-items-end main-display">
                        <h2>Phase 1: Nomination</h2>
                        <h4>Time left to vote:</h4>
                        <h2 id="countdown"></h2>
                    </div>
                </div>
            </div>
        </header>
    )
}
export defualt SampleHeader;