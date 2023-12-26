@php
    $imageSrc = file_exists(public_path('uploads/' . $admin->cover_photo)) ? asset('uploads/' . $admin->cover_photo) : $admin->cover_photo;
    $admin = session('admin');
@endphp

@extends('layouts.app')
@section('title', 'Profile')
@section('main-content')
    @if ($errors->any())
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong>
            @foreach ($errors->all() as $error)
                <p>{{ $error }}</p>
            @endforeach
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    @endif

    @if (session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{{ session('success') }}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    @endif
    <div class="pd-ltr-20 xs-pd-20-10">
        <div class="col min-height-200px">
            <div class="page-header">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <nav aria-label="breadcrumb" role="navigation">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="{{ route('dashboard') }}">Home</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    Profile
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
                    <div class="pd-20 card-box height-100-p">
                        <div class="profile-photo">
                            <a href="modal" data-toggle="modal" data-target="#modal" class="edit-avatar"><i
                                    class="fa fa-pencil"></i></a>
                            <img src="{{ $imageSrc }}" alt="" class="avatar-photo" />
                            <div class="modal fade" id="modal" tabindex="-1" role="dialog"
                                aria-labelledby="modalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body pd-5">
                                            <div class="img-container">
                                                <img id="image" src="{{ $imageSrc }}" alt="Avatar Picture" />
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <input type="submit" value="Update" class="btn btn-primary" />
                                            <button type="button" class="btn btn-default" data-dismiss="modal">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-center h5 mb-0">{{ strtoupper($admin->username) }}</h5>
                        <p class="text-center text-muted font-14">
                            Lorem ipsum dolor sit amet
                        </p>
                        <div class="profile-info">
                            <h5 class="mb-20 h5 text-blue">Contact Information</h5>
                            <ul>
                                <li>
                                    <span>Email Address:</span>
                                    {{ $admin->email }}
                                </li>
                                <li>
                                    <span>Phone Number:</span>
                                    {{ $admin->phone_number }}
                                </li>
                                <li>
                                    <span>Country:</span>
                                    {{ $admin->country }}
                                </li>
                                <li>
                                    @php 
                                        $dateVal = explode('-', $admin->dob);
                                        $month = date('F', mktime(0, 0, 0, $dateVal[1]));
                                        $date = $dateVal[2] . ' ' . $month . ' ' . $dateVal[0];
                                    @endphp
                                    <span>Date of birth</span>
                                    {{ $date }}
                                </li>
                                <li>
                                    <span>Created At</span>
                                    {{ $admin->created_at }}
                                </li>
                                <li>
                                    <span>Update At</span>
                                    {{ $admin->updated_at }}
                                </li>
                            </ul>
                        </div>
                        <div class="profile-social">
                            <h5 class="mb-20 h5 text-blue">Social Links</h5>
                            <ul class="clearfix">
                                <li>
                                    <a href="{{ $admin->facebook }}" class="btn" data-bgcolor="#3b5998"
                                        data-color="#ffffff"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="{{ $admin->twitter }}" class="btn" data-bgcolor="#1da1f2"
                                        data-color="#ffffff"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="{{ $admin->instagram }}" class="btn" data-bgcolor="#f46f30"
                                        data-color="#ffffff"><i class="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="{{ $admin->tiktok }}" class="btn" data-bgcolor="#bd081c"
                                        data-color="#ffffff"><i class="fa fa-pinterest-p"></i></a>
                                </li>
                                <li>
                                    <a href="{{ $admin->youtube }}" class="btn" data-bgcolor="#00aff0"
                                        data-color="#ffffff"><i class="fa fa-youtube"></i></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
                    <div class="card-box height-100-p overflow-hidden">
                        <div class="profile-tab height-100-p">
                            <div class="tab height-100-p">
                                <ul class="nav nav-tabs customtab" role="tablist">
                                    {{-- <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#timeline"
                                            role="tab">Timeline</a>
                                    </li> --}}
                                    {{-- <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tasks" role="tab">Tasks</a>
                                    </li> --}}
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#setting"
                                            role="tab">Settings</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <!-- Timeline Tab start -->
                                    {{-- <div class="tab-pane fade show active" id="timeline" role="tabpanel">
                                        <div class="pd-20">
                                            <div class="profile-timeline">
                                                <div class="timeline-month">
                                                    <h5>August, 2020</h5>
                                                </div>
                                                <div class="profile-timeline-list">
                                                    <ul>
                                                        <li>
                                                            <div class="date">12 Aug</div>
                                                            <div class="task-name">
                                                                <i class="ion-android-alarm-clock"></i> Task
                                                                Added
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit.
                                                            </p>
                                                            <div class="task-time">09:30 am</div>
                                                        </li>
                                                        <li>
                                                            <div class="date">10 Aug</div>
                                                            <div class="task-name">
                                                                <i class="ion-ios-chatboxes"></i> Task Added
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit.
                                                            </p>
                                                            <div class="task-time">09:30 am</div>
                                                        </li>
                                                        <li>
                                                            <div class="date">10 Aug</div>
                                                            <div class="task-name">
                                                                <i class="ion-ios-clock"></i> Event Added
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit.
                                                            </p>
                                                            <div class="task-time">09:30 am</div>
                                                        </li>
                                                        <li>
                                                            <div class="date">10 Aug</div>
                                                            <div class="task-name">
                                                                <i class="ion-ios-clock"></i> Event Added
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit.
                                                            </p>
                                                            <div class="task-time">09:30 am</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="timeline-month">
                                                    <h5>July, 2020</h5>
                                                </div>
                                                <div class="profile-timeline-list">
                                                    <ul>
                                                        <li>
                                                            <div class="date">12 July</div>
                                                            <div class="task-name">
                                                                <i class="ion-android-alarm-clock"></i> Task
                                                                Added
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit.
                                                            </p>
                                                            <div class="task-time">09:30 am</div>
                                                        </li>
                                                        <li>
                                                            <div class="date">10 July</div>
                                                            <div class="task-name">
                                                                <i class="ion-ios-chatboxes"></i> Task Added
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit.
                                                            </p>
                                                            <div class="task-time">09:30 am</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="timeline-month">
                                                    <h5>June, 2020</h5>
                                                </div>
                                                <div class="profile-timeline-list">
                                                    <ul>
                                                        <li>
                                                            <div class="date">12 June</div>
                                                            <div class="task-name">
                                                                <i class="ion-android-alarm-clock"></i> Task
                                                                Added
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit.
                                                            </p>
                                                            <div class="task-time">09:30 am</div>
                                                        </li>
                                                        <li>
                                                            <div class="date">10 June</div>
                                                            <div class="task-name">
                                                                <i class="ion-ios-chatboxes"></i> Task Added
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit.
                                                            </p>
                                                            <div class="task-time">09:30 am</div>
                                                        </li>
                                                        <li>
                                                            <div class="date">10 June</div>
                                                            <div class="task-name">
                                                                <i class="ion-ios-clock"></i> Event Added
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit.
                                                            </p>
                                                            <div class="task-time">09:30 am</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> --}}
                                    <!-- Timeline Tab End -->
                                    <!-- Tasks Tab start -->
                                    {{-- <div class="tab-pane fade" id="tasks" role="tabpanel">
                                        <div class="pd-20 profile-task-wrap">
                                            <div class="container pd-0">
                                                <!-- Open Task start -->
                                                <div class="task-title row align-items-center">
                                                    <div class="col-md-8 col-sm-12">
                                                        <h5>Open Tasks (4 Left)</h5>
                                                    </div>
                                                    <div class="col-md-4 col-sm-12 text-right">
                                                        <a href="task-add" data-toggle="modal" data-target="#task-add"
                                                            class="bg-light-blue btn text-blue weight-500"><i
                                                                class="ion-plus-round"></i> Add</a>
                                                    </div>
                                                </div>
                                                <div class="profile-task-list pb-30">
                                                    <ul>
                                                        <li>
                                                            <div class="custom-control custom-checkbox mb-5">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="task-1" />
                                                                <label class="custom-control-label"
                                                                    for="task-1"></label>
                                                            </div>
                                                            <div class="task-type">Email</div>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit. Id ea earum.
                                                            <div class="task-assign">
                                                                Assigned to Ferdinand M.
                                                                <div class="due-date">
                                                                    due date <span>22 February 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox mb-5">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="task-2" />
                                                                <label class="custom-control-label"
                                                                    for="task-2"></label>
                                                            </div>
                                                            <div class="task-type">Email</div>
                                                            Lorem ipsum dolor sit amet.
                                                            <div class="task-assign">
                                                                Assigned to Ferdinand M.
                                                                <div class="due-date">
                                                                    due date <span>22 February 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox mb-5">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="task-3" />
                                                                <label class="custom-control-label"
                                                                    for="task-3"></label>
                                                            </div>
                                                            <div class="task-type">Email</div>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit.
                                                            <div class="task-assign">
                                                                Assigned to Ferdinand M.
                                                                <div class="due-date">
                                                                    due date <span>22 February 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox mb-5">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="task-4" />
                                                                <label class="custom-control-label"
                                                                    for="task-4"></label>
                                                            </div>
                                                            <div class="task-type">Email</div>
                                                            Lorem ipsum dolor sit amet. Id ea earum.
                                                            <div class="task-assign">
                                                                Assigned to Ferdinand M.
                                                                <div class="due-date">
                                                                    due date <span>22 February 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- Open Task End -->
                                                <!-- Close Task start -->
                                                <div class="task-title row align-items-center">
                                                    <div class="col-md-12 col-sm-12">
                                                        <h5>Closed Tasks</h5>
                                                    </div>
                                                </div>
                                                <div class="profile-task-list close-tasks">
                                                    <ul>
                                                        <li>
                                                            <div class="custom-control custom-checkbox mb-5">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="task-close-1" checked="" disabled="" />
                                                                <label class="custom-control-label"
                                                                    for="task-close-1"></label>
                                                            </div>
                                                            <div class="task-type">Email</div>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit. Id ea earum.
                                                            <div class="task-assign">
                                                                Assigned to Ferdinand M.
                                                                <div class="due-date">
                                                                    due date <span>22 February 2018</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox mb-5">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="task-close-2" checked="" disabled="" />
                                                                <label class="custom-control-label"
                                                                    for="task-close-2"></label>
                                                            </div>
                                                            <div class="task-type">Email</div>
                                                            Lorem ipsum dolor sit amet.
                                                            <div class="task-assign">
                                                                Assigned to Ferdinand M.
                                                                <div class="due-date">
                                                                    due date <span>22 February 2018</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox mb-5">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="task-close-3" checked="" disabled="" />
                                                                <label class="custom-control-label"
                                                                    for="task-close-3"></label>
                                                            </div>
                                                            <div class="task-type">Email</div>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit.
                                                            <div class="task-assign">
                                                                Assigned to Ferdinand M.
                                                                <div class="due-date">
                                                                    due date <span>22 February 2018</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox mb-5">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="task-close-4" checked="" disabled="" />
                                                                <label class="custom-control-label"
                                                                    for="task-close-4"></label>
                                                            </div>
                                                            <div class="task-type">Email</div>
                                                            Lorem ipsum dolor sit amet. Id ea earum.
                                                            <div class="task-assign">
                                                                Assigned to Ferdinand M.
                                                                <div class="due-date">
                                                                    due date <span>22 February 2018</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- Close Task start -->
                                                <!-- add task popup start -->
                                                <div class="modal fade customscroll" id="task-add" tabindex="-1"
                                                    role="dialog">
                                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLongTitle">
                                                                    Tasks Add
                                                                </h5>
                                                                <button type="button" class="close"
                                                                    data-dismiss="modal" aria-label="Close"
                                                                    data-toggle="tooltip" data-placement="bottom"
                                                                    title="" data-original-title="Close Modal">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body pd-0">
                                                                <div class="task-list-form">
                                                                    <ul>
                                                                        <li>
                                                                            <form>
                                                                                <div class="form-group row">
                                                                                    <label class="col-md-4">Task
                                                                                        Type</label>
                                                                                    <div class="col-md-8">
                                                                                        <input type="text"
                                                                                            class="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group row">
                                                                                    <label class="col-md-4">Task
                                                                                        Message</label>
                                                                                    <div class="col-md-8">
                                                                                        <textarea class="form-control"></textarea>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group row">
                                                                                    <label class="col-md-4">Assigned
                                                                                        to</label>
                                                                                    <div class="col-md-8">
                                                                                        <select
                                                                                            class="selectpicker form-control"
                                                                                            data-style="btn-outline-primary"
                                                                                            title="Not Chosen"
                                                                                            multiple=""
                                                                                            data-selected-text-format="count"
                                                                                            data-count-selected-text="{0} people selected">
                                                                                            <option>Ferdinand M.
                                                                                            </option>
                                                                                            <option>Don H. Rabon
                                                                                            </option>
                                                                                            <option>Ann P. Harris
                                                                                            </option>
                                                                                            <option>
                                                                                                Katie D. Verdin
                                                                                            </option>
                                                                                            <option>
                                                                                                Christopher S. Fulghum
                                                                                            </option>
                                                                                            <option>
                                                                                                Matthew C. Porter
                                                                                            </option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group row mb-0">
                                                                                    <label class="col-md-4">Due
                                                                                        Date</label>
                                                                                    <div class="col-md-8">
                                                                                        <input type="text"
                                                                                            class="form-control date-picker" />
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;" class="remove-task"
                                                                                data-toggle="tooltip"
                                                                                data-placement="bottom" title=""
                                                                                data-original-title="Remove Task"><i
                                                                                    class="ion-minus-circled"></i></a>
                                                                            <form>
                                                                                <div class="form-group row">
                                                                                    <label class="col-md-4">Task
                                                                                        Type</label>
                                                                                    <div class="col-md-8">
                                                                                        <input type="text"
                                                                                            class="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group row">
                                                                                    <label class="col-md-4">Task
                                                                                        Message</label>
                                                                                    <div class="col-md-8">
                                                                                        <textarea class="form-control"></textarea>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group row">
                                                                                    <label class="col-md-4">Assigned
                                                                                        to</label>
                                                                                    <div class="col-md-8">
                                                                                        <select
                                                                                            class="selectpicker form-control"
                                                                                            data-style="btn-outline-primary"
                                                                                            title="Not Chosen"
                                                                                            multiple=""
                                                                                            data-selected-text-format="count"
                                                                                            data-count-selected-text="{0} people selected">
                                                                                            <option>Ferdinand M.
                                                                                            </option>
                                                                                            <option>Don H. Rabon
                                                                                            </option>
                                                                                            <option>Ann P. Harris
                                                                                            </option>
                                                                                            <option>
                                                                                                Katie D. Verdin
                                                                                            </option>
                                                                                            <option>
                                                                                                Christopher S. Fulghum
                                                                                            </option>
                                                                                            <option>
                                                                                                Matthew C. Porter
                                                                                            </option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group row mb-0">
                                                                                    <label class="col-md-4">Due
                                                                                        Date</label>
                                                                                    <div class="col-md-8">
                                                                                        <input type="text"
                                                                                            class="form-control date-picker" />
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="add-more-task">
                                                                    <a href="#" data-toggle="tooltip"
                                                                        data-placement="bottom" title=""
                                                                        data-original-title="Add Task"><i
                                                                            class="ion-plus-circled"></i> Add
                                                                        More Task</a>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">
                                                                    Add
                                                                </button>
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">
                                                                    Close
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- add task popup End -->
                                            </div>
                                        </div>
                                    </div> --}}
                                    <!-- Tasks Tab End -->
                                    <!-- Setting Tab start -->
                                    <div class="tab-pane fade height-100-p active show" id="setting" role="tabpanel">
                                        <div class="profile-setting">
                                            <form action="{{ route('profile.update') }}" method="POST">
                                                @csrf
                                                @method('PUT')
                                                <ul class="profile-edit-list row">
                                                    <li class="weight-500 col-md-6">
                                                        <h4 class="text-blue h5 mb-20">
                                                            Edit Your Personal Setting
                                                        </h4>
                                                        <div class="form-group">
                                                            <label>User Name</label>
                                                            <input class="form-control form-control-lg" type="text"
                                                                name="username" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Email</label>
                                                            <input class="form-control form-control-lg" type="email"
                                                                name="email" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Date of birth</label>
                                                            <input class="form-control form-control-lg date-picker"
                                                                type="text" name="dob" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Gender</label>
                                                            <div class="d-flex">
                                                                <div class="custom-control custom-radio mb-5 mr-20">
                                                                    <input type="radio" id="customRadio4"
                                                                        class="custom-control-input" name="gender"
                                                                        value="0" />
                                                                    <label class="custom-control-label weight-400"
                                                                        for="customRadio4">Male</label>
                                                                </div>
                                                                <div class="custom-control custom-radio mb-5">
                                                                    <input type="radio" id="customRadio5"
                                                                        name="gender" class="custom-control-input"
                                                                        value="1" />
                                                                    <label class="custom-control-label weight-400"
                                                                        for="customRadio5">Female</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Country</label>
                                                            <select class="selectpicker form-control form-control-lg"
                                                                data-style="btn-outline-secondary btn-lg"
                                                                title="Not Chosen" name="country">
                                                                <option>United States</option>
                                                                <option>India</option>
                                                                <option>United Kingdom</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Phone Number</label>
                                                            <input class="form-control form-control-lg" type="text"
                                                                name="phone_number" />
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="custom-control custom-checkbox mb-5">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="customCheck1-1" />
                                                                <label class="custom-control-label weight-400"
                                                                    for="customCheck1-1">I agree to receive
                                                                    notification
                                                                    emails</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group mb-0">
                                                            <input type="submit" class="btn btn-primary"
                                                                value="Update Information" />
                                                        </div>
                                                    </li>
                                                    <li class="weight-500 col-md-6">
                                                        <h4 class="text-blue h5 mb-20">
                                                            Edit Social Media links
                                                        </h4>
                                                        <div class="form-group">
                                                            <label>Facebook URL:</label>
                                                            <input class="form-control form-control-lg" type="text"
                                                                placeholder="Paste your link here" name="facebook" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Twitter URL:</label>
                                                            <input class="form-control form-control-lg" type="text"
                                                                placeholder="Paste your link here" name="twitter" />
                                                        </div>

                                                        <div class="form-group">
                                                            <label>Instagram URL:</label>
                                                            <input class="form-control form-control-lg" type="text"
                                                                placeholder="Paste your link here" name="instagram" />
                                                        </div>



                                                        <div class="form-group">
                                                            <label>Youtube URL:</label>
                                                            <input class="form-control form-control-lg" type="text"
                                                                placeholder="Paste your link here" name="youtube" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Tiktok URL:</label>
                                                            <input class="form-control form-control-lg" type="text"
                                                                placeholder="Paste your link here" name="tiktok" />
                                                        </div>

                                                    </li>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                    <!-- Setting Tab End -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
