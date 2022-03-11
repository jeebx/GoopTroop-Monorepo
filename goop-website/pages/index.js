import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

    return (
    <>
        <div class="container-fluid d-flex justify-content-center" id="contentContainer">
            <div class="row align-items-center">
            <div class="col">
                <div class="card p-2 align-items-center" id="nounCard">
                    <div id ="nounCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" id="noun72"></div>
                            <div class="carousel-item" id="noun93"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" id="summaryCard">
                    <h2>Welcome to the Goop Troop</h2>
                    <p>The Goop Troop is a sub-DAO of the Nouns DAO. The Troop currently owns 2 Nouns, #72 and #93.</p>
                </div>
            </div>
            </div>
        </div>
    </>
    )
};